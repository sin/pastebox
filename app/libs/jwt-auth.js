var jwt = require('jsonwebtoken');
var config = require('../../config.json');
var User = require('../models/user.js');

module.exports = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) {
                return res.send({success: false, message: 'Failed to authenticate token.'}, 401);
            } else {
                if (decoded.exp <= Date.now()) {
                    return res.send({success: false, message: 'Access token has expired.'}, 400);
                }

                User.findOne({_id: decoded.iss}, function (err, user) {
                    if (err) {
                        return res.send({success: false, message: 'Unauthenticated.'}, 401);
                    }

                    req.user = user;
                    return next();
                });
            }
        });
    } else {
        return res.send({success: false, message: 'No token provided.'}, 403);
    }
};
