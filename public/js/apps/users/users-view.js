define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'text!templates/users.html', 'text!templates/users-item.html'],
    function ($, _, Backbone, Marionette, app, compositeTemplate, itemTemplate) {
        var childView = Marionette.ItemView.extend({
            tagName: 'li',
            template: itemTemplate,

            events: {
                click: 'click'
            },

            click: function (event) {
                event.preventDefault();
                app.trigger('snippets:user', this.model);
            }

        });

        return Marionette.CompositeView.extend({
            template: compositeTemplate,
            childView: childView,
            childViewContainer: '.users-list'
        });
    });
