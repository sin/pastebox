define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/users/users-view-item', 'text!templates/users-view.html'],
    function ($, _, Backbone, Marionette, app, ChildView, template) {

        return Marionette.CompositeView.extend({
            template: template,
            childView: ChildView,
            childViewContainer: '.users-list'
        });

    });
