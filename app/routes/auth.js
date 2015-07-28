var jwt = require('jsonwebtoken');
var config = require('../../config.json');
var User = require('../models/user');

module.exports.set = function (app) {

    app.get('/login', function (req, res) {
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        if (token) {
            jwt.verify(token, config.secret, function (err, decoded) {
                if (err) {
                    return res.send({success: false, message: 'Failed to authenticate token.'}, 401);
                } else {
                    if (decoded.exp <= Date.now()) {
                        return res.send({success: false, message: 'Access token has expired.'}, 400);
                    }

                    User.findOne({_id: decoded._id}, function (err, user) {
                        if (err) {
                            return res.send({success: false, message: 'Unauthenticated.'}, 401);
                        }

                        if (!user) {
                            return res.send({success: false, message: 'User not found.'}, 401);
                        }

                        return res.status(200).json(user);
                    });
                }
            });
        } else {
            return res.send({success: false, message: 'No token provided.'}, 403);
        }
    });

    app.post('/login', function (req, res) {

        User.findOne({
            email: req.body.email
        }, function (err, user) {

            if (err) throw err;

            if (!user) {
                res.send({success: false, message: 'Authentication failed. User not found.'}, 401);
            } else if (user) {
                user.comparePassword(req.body.password, function (err, isMatch) {
                    if (isMatch) {
                        var token = jwt.sign(user, config.secret, {
                            expiresInMinutes: 10080
                        });

                        res.json({
                            success: true,
                            message: 'Authenticated!',
                            token: token,
                            user: user
                        });
                    } else {
                        res.send({success: false, message: 'Authentication failed. Wrong password.'}, 401);
                    }
                });
            }
        });
    });

    app.post('/signup', function (req, res) {
        var user = new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        });
        user.save(function (err, user) {
            if (err) res.send(err);
            res.status(201).json(user);
        });
    });
};
