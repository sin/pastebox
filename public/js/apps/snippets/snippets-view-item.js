define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'text!templates/snippets-list-item.html'],
    function ($, _, Backbone, Marionette, app, template) {

        return Marionette.ItemView.extend({
            tagName: 'li',
            template: template,

            events: {
                click: 'clickItem'
            },

            initialize: function () {
                this.model.on('change', this.render, this);
            },

            clickItem: function (event) {
                var items = $('.snippets-list li'),
                    thisItem = $(event.currentTarget);

                app.trigger('snippet:show', this.model);
                items.removeClass('active');
                thisItem.addClass('active');
            }
        });

    });
