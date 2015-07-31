define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'text!templates/main-show.html'],
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
                'click .new-snippet-link': 'clickNewSnippet',
                'click .all-snippets-link': 'clickAllSnippets',
                'click .starred-snippets-link': 'clickStarredSnippets'
            },

            clickNewSnippet: function (event) {
                app.trigger('snippet:new');
                event.preventDefault();
            },

            clickAllSnippets: function (event) {
                app.trigger('snippets:all');
                event.preventDefault();
            },

            clickStarredSnippets: function (event) {
                app.trigger('snippets:starred');
                event.preventDefault();
            }
        });

    });
