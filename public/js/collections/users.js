define(['jquery', 'underscore', 'backbone', 'marionette',
        'models/user'],
    function ($, _, Backbone, Marionette, Model) {

        return Backbone.Collection.extend({
            model: Model,
            url: '/api/users',

            initialize: function () {
                this.fetch();
            }
        });

    });
