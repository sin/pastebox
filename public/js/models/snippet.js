define(['underscore', 'backbone', 'moment'], function(_, Backbone, moment) {
    return Backbone.Model.extend({
        urlRoot: '/api/snippets',
        idAttribute: '_id',
        defaults: {
            title: '',
            description: '',
            created: new Date().getTime(),
            updated: new Date().getTime(),
            starred: false,
            language: 'text',
            code: ''
        },

        parse: function (model) {
            model.createdFromNow = moment(model.created).fromNow();
            return model;
        },

        validate: function(attrs) {
            if (_.isEmpty(attrs.code)) {
                return 'Empty snippet';
            }
        }
    });
});
