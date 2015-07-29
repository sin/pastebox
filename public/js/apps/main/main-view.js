define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'text!templates/main.html'],
    function ($, _, Backbone, Marionette, app, template) {
        return Marionette.LayoutView.extend({
            template: template,
            className: 'main-flex-wrapper',

            regions: {
                users: '.users',
                list: '.list',
                content: '.content'
            },

            events: {
                'click .new-snippet-link': 'newSnippet',
                'click .all-snippets-link': 'allSnippets',
                'click .starred-snippets-link': 'starredSnippets'
            },

            newSnippet: function (event) {
                event.preventDefault();
                app.trigger('snippets:new');
            },

            allSnippets: function (event) {
                event.preventDefault();
                app.trigger('snippets:all');
            },

            starredSnippets: function (event) {
                event.preventDefault();
                app.trigger('snippets:starred');
            }
        });
    });
