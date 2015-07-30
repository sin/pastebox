var mongoose = require('mongoose');

var SnippetSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: false},
    created: {type: Date, default: Date.now()},
    updated: {type: Date, default: Date.now()},
    language: {type: String, default: 'text', required: true},
    code: {type: String, required: true}
});

module.exports = mongoose.model('Snippet', SnippetSchema);
