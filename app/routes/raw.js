var Snippet = require('../models/snippet');

module.exports.set = function(app) {

    app.get('/:id', function(req, res) {
        res.setHeader('content-type', 'text/plain');
        Snippet.findById(req.params.id, function(err, snippet) {
            if (err) {
                return res.send(err);
            }

            res.send(snippet.code);
        });
    });

};
