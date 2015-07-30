define(['underscore', 'backbone', 'models/snippet'], function (_, Backbone, snippet) {
    return Backbone.Collection.extend({
        model: snippet,
        url: '/api/snippets',

        initialize: function () {
            this.fetch();
        }
    });
});
