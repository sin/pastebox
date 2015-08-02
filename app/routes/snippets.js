var Snippet = require('../models/snippet');

module.exports.set = function (api) {

    api.get('/snippets', function (req, res) {
        var find, p = req.query,
            sort = (p.sortOrder == 1) ? ('-' + p.sortBy) : (p.sortBy);

        if (p.filterBy == 'user' && p.filterInvert === 'true') {
            find = {'author._id': {$not: {$eq: p.filter}}};
        } else if (p.filterBy == 'user') {
            find = {'author._id': p.filter};
        } else {
            find = {};
        }

        if (p.search) {
            find.code = new RegExp('^' + p.search);
        }

        Snippet.find(find).sort(sort).exec(function (err, snippets) {
            if (err) {
                return res.send(err);
            }

            res.json(snippets);
        });
    });

    api.get('/snippets/:id', function (req, res) {
        Snippet.findById(req.params.id, function (err, snippet) {
            if (err) {
                return res.send(err);
            }

            res.json(snippet);
        });
    });

    api.post('/snippets', function (req, res) {
        var snippet = new Snippet({
            title: req.body.title,
            description: req.body.description,
            updated: null,
            language: req.body.language,
            code: req.body.code,
            author: {
                _id: req.user._id,
                username: req.user.username,
                email: req.user.email
            }
        });

        snippet.save(function (err, snippet) {
            if (err) {
                return res.send(err);
            }

            res.status(201).json(snippet);
        });
    });

    api.put('/snippets/:id', function (req, res) {
        req.body.updated = Date.now();
        Snippet.findByIdAndUpdate(req.params.id, req.body, function (err) {
            if (err) {
                return res.send(err);
            }

            Snippet.findById(req.params.id, function (err, snippet) {
                if (err) {
                    return res.send(err);
                }

                res.json(snippet);
            });
        });
    });

    api.delete('/snippets/:id', function (req, res) {
        Snippet.findByIdAndRemove(req.params.id, req.body, function (err, snippet) {
            if (err) {
                return res.send(err);
            }

            res.json(snippet);
        });
    });

};
