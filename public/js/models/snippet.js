define(['underscore', 'backbone'], function(_, Backbone) {
    return Backbone.Model.extend({
        url: 'snippets',

        defaults: {
            title: 'untitled',
            description: '',
            created: new Date().getTime(),
            updated: new Date().getTime(),
            starred: false,
            language: 'text',
            code: ''
        },

        validate: function(attrs) {
            if (_.isEmpty(attrs.code)) {
                return 'Empty snippet';
            }
        }
    });
});
