var jwt = require('jsonwebtoken');
var config = require('../../config.json');
var User = require('../models/user');

module.exports.set = function (app) {

    app.get('/login', function (req, res) {
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        if (token) {
            jwt.verify(token, config.secret, function (err, decoded) {
                if (err) {
                    return res.status(401).send({success: false, message: 'Failed to authenticate token.'});
                } else {
                    if (decoded.exp <= Date.now()) {
                        return res.status(400).send({success: false, message: 'Access token has expired.'});
                    }

                    User.findOne({_id: decoded._id}, function (err, user) {
                        if (err) {
                            return res.status(401).send({success: false, message: 'Unauthenticated.'});
                        }

                        if (!user) {
                            return res.status(401).send({success: false, message: 'User not found.'});
                        }

                        return res.status(200).json(user);
                    });
                }
            });
        } else {
            return res.status(403).send({success: false, message: 'No token provided.'});
        }
    });

    app.post('/login', function (req, res) {
        User.findOne({
            email: req.body.email
        }, function (err, user) {

            if (err) throw err;

            if (!user) {
                res.status(401).send({success: false, message: 'Authentication failed. User not found.'});
            } else if (user) {
                user.comparePassword(req.body.password, function (err, isMatch) {
                    if (isMatch) {
                        var token = jwt.sign(user, config.secret, {
                            expiresInMinutes: 10080
                        });

                        res.status(200).json({
                            success: true,
                            message: 'Authenticated!',
                            token: token,
                            user: user
                        });
                    } else {
                        res.status(401).send({success: false, message: 'Authentication failed. Wrong password.'});
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
