define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'text!templates/list.html', 'text!templates/list-item.html'],
    function ($, _, Backbone, Marionette, app, compositeTemplate, itemTemplate) {
        var childView = Marionette.ItemView.extend({
            tagName: 'li',
            template: itemTemplate,

            events: {
                click: 'click'
            },

            initialize: function () {
                this.model.on('change', this.render, this);
            },

            click: function (event) {
                app.trigger('snippet:show', this.model);
                $('.snippets-list li').removeClass('active');
                $(event.currentTarget).addClass('active');
            }

        });

        return Marionette.CompositeView.extend({
            template: compositeTemplate,
            childView: childView,
            childViewContainer: '.snippets-list',

            events: {}
        });
    });
