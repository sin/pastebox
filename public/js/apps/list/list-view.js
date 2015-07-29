define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'text!templates/list.html', 'text!templates/list-item.html'],
    function ($, _, Backbone, Marionette, app, compositeTemplate, itemTemplate) {
        var childView = Marionette.ItemView.extend({
            tagName: 'li',
            template: itemTemplate
        });

        return Marionette.CompositeView.extend({
            template: compositeTemplate,
            childView: childView,
            childViewContainer: '.snippets-list',

            events: {
            }
        });
    });
