define(['underscore', 'backbone', 'models/user'], function (_, Backbone, user) {
    return Backbone.Collection.extend({
        model: user,
        url: '/api/users',

        initialize: function () {
            this.fetch();
        }
    });
});
