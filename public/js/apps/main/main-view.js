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
            }
        });
    });
