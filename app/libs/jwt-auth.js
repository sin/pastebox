var jwt = require('jsonwebtoken');
var config = require('../../config.json');
var User = require('../models/user.js');

module.exports = function (req, res, next) {
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

                    req.user = user;
                    return next();
                });
            }
        });
    } else {
        return res.status(403).send({success: false, message: 'No token provided.'});
    }
};
