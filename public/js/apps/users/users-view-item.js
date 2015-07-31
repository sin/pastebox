define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'text!templates/users-view-item.html'],
    function ($, _, Backbone, Marionette, app, template) {

        return Marionette.ItemView.extend({
            tagName: 'li',
            template: template,

            events: {
                click: 'clickItem'
            },

            clickItem: function (event) {
                app.trigger('snippets:user', this.model);
                event.preventDefault();
            }
        });

    });
