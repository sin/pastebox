define(['jquery', 'underscore', 'backbone', 'marionette', 'prism', 'global', 'text!templates/snippet.html'],
    function ($, _, Backbone, Marionette, prism, app, template) {
        return Marionette.ItemView.extend({
            tagName: 'span',
            template: template,
            onRender: function () {
                prism.highlightElement($(this.el).find('code')[0]);
            }
        });
    });
