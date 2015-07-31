define(['jquery', 'underscore', 'backbone', 'marionette'],
    function ($, _, Backbone) {

        return Backbone.Model.extend({
            urlRoot: '/api/users',
            idAttribute: '_id'
        });

    });
