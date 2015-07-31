define(['jquery', 'underscore', 'backbone', 'marionette',
        'apps/snippets/snippets-view-item',
        'text!templates/snippets-list.html'],
    function ($, _, Backbone, Marionette, ChildView, template) {

        return Marionette.CompositeView.extend({
            template: template,
            childView: ChildView,
            childViewContainer: '.snippets-list'
        });

    });
