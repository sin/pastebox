var jwt = require('jsonwebtoken');
var config = require('../../config.json');
var User = require('../models/user');

module.exports.set = function (app) {

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
