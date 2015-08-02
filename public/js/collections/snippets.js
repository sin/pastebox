define(['jquery', 'underscore', 'backbone', 'marionette',
        'models/snippet'],
    function ($, _, Backbone, Marionette, Model) {

        return Backbone.Collection.extend({
            model: Model,
            url: '/api/snippets'
        });

    });
