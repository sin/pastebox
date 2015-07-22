define(['underscore', 'backbone'], function(_, Backbone) {

    return Backbone.Model.extend({
        defaults: {
            title: '',
            description: '',
            timestamp: new Date().getTime()
        },
        validate: function(attrs) {
            if (_.isEmpty(attrs.title)) {
                return 'Missing title';
            }
        }
    });

});
