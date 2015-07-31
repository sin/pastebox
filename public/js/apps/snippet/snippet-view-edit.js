define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'prism', 'ace/ace',
        'text!templates/snippet-edit.html'],
    function ($, _, Backbone, Marionette, app, prism, ace, template) {

        return Marionette.ItemView.extend({
            tagName: 'span',
            template: template,

            events: {
                'click .save': 'clickSave',
                'click .cancel': 'clickCancel'
            },

            onRender: function () {
                var editorEl = this.$el.find('#ace')[0],
                    editor = ace.edit(editorEl);

                this.editor = editor;
                editor.getSession().setMode('ace/mode/javascript');
            },

            onShow: function () {
                var titleEl = this.$el.find('.title')[0];

                titleEl.focus();
            },

            clickSave: function (event) {
                var model = this.model;
                event.preventDefault();

                model.save({
                    title: $('.title')[0].value,
                    description: $('.description')[0].value,
                    language: $('.language')[0].value,
                    code: this.editor.getValue()
                })
                    .success(function () {
                        app.trigger('snippet:show', model);
                    });
            },

            clickCancel: function (event) {
                event.preventDefault();
                if (this.model.get('_id')) {
                    app.trigger('snippet:show', this.model);
                } else {
                    app.main.currentView.content.empty();
                }
            }
        });

    });
