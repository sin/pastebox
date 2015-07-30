define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'text!templates/snippet.html'],
    function ($, _, Backbone, Marionette, app, template) {
        return Marionette.ItemView.extend({
            tagName: 'span',
            template: template
        });
    });
