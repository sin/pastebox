var User = require('../models/user');

module.exports.set = function(api) {

    api.get('/users', function(req, res) {
        User.find({}, function (err, users) {
            if (err) {
                return res.send(err);
            }

            res.json(users);
        });
    });

    api.get('/users/:id', function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err) {
                return res.send(err);
            }

            res.json(user);
        });
    });

    api.post('/users', function(req, res) {
        var user = new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        });

        user.save(function(err, user) {
            if (err) {
                return res.send(err);
            }

            res.status(201).json(user);
        });
    });

    api.put('/users/:id', function(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
            if (err) {
                return res.send(err);
            }

            User.findById(req.params.id, function(err, user) {
                if (err) {
                    return res.send(err);
                }

                res.json(user);
            });
        });
    });

    api.delete('/users/:id', function(req, res) {
        User.findByIdAndRemove(req.params.id, req.body, function (err, user) {
            if (err) {
                return res.send(err);
            }

            res.json(user);
        });
    });

};
