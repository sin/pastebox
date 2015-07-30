define(['jquery', 'underscore', 'backbone', 'marionette', 'prism', 'global', 'text!templates/snippet.html'],
    function ($, _, Backbone, Marionette, prism, app, template) {
        return Marionette.ItemView.extend({
            tagName: 'span',
            template: template,

            events: {
                'click .link': 'link',
                'click .fork': 'fork',
                'click .edit': 'edit',
                'click .delete': 'delete'
            },

            link: function (event) {
                event.preventDefault();
            },

            fork: function (event) {
                event.preventDefault();
            },

            edit: function (event) {
                event.preventDefault();
            },

            delete: function (event) {
                event.preventDefault();
                this.model.destroy()
                    .success(function () {
                        app.trigger('snippets:new');
                    });
            },

            onRender: function () {
                prism.highlightElement($(this.el).find('code')[0]);
            }
        });
    });
