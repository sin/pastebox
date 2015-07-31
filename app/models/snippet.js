var mongoose = require('mongoose');

var SnippetSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: false},
    created: {type: Date, default: Date.now()},
    updated: {type: Date, default: undefined},
    language: {type: String, default: 'text', required: true},
    code: {type: String, required: true},
    author: {
        _id: {type: String, required: true},
        username: {type: String, required: true},
        email: {type: String, required: true}
    }
});

module.exports = mongoose.model('Snippet', SnippetSchema);
