define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'prism',
        'text!templates/snippet-show.html'],
    function ($, _, Backbone, Marionette, app, prism, template) {

        return Marionette.ItemView.extend({
            tagName: 'span',
            template: template,

            events: {
                'click .fork': 'clickFork',
                'click .edit': 'clickEdit',
                'click .delete': 'clickDelete'
            },

            onRender: function () {
                var codeEl = this.$el.find('code')[0];

                prism.highlightElement(codeEl);
            },

            clickFork: function (event) {
                app.trigger('snippet:fork', this.model);
                event.preventDefault();
            },

            clickEdit: function (event) {
                app.trigger('snippet:edit', this.model);
                event.preventDefault();
            },

            clickDelete: function (event) {
                this.model.destroy()
                    .success(function () {
                        app.trigger('snippet:new');
                    });

                event.preventDefault();
            }

        });
    });
