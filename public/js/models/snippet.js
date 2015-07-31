define(['jquery', 'underscore', 'backbone', 'marionette', 'moment'],
    function ($, _, Backbone, Marionette, moment) {

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
                var friendlyCreated = moment(model.created).fromNow(),
                    friendlyUpdated = moment(model.updated).fromNow();

                model.createdFromNow = friendlyCreated;

                if (model.updated) {
                    model.updatedFromNow = friendlyUpdated;
                }

                return model;
            },

            validate: function (attrs) {
                if (_.isEmpty(attrs.code)) {
                    return 'Empty snippet';
                }
            }
        });

    });
