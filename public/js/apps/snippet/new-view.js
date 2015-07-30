define(['jquery', 'underscore', 'backbone', 'marionette', 'prism', 'global', 'ace/ace',
        'text!templates/new-snippet.html', 'models/snippet'],
    function ($, _, Backbone, Marionette, prism, app, ace, template, Model) {
        return Marionette.ItemView.extend({
            tagName: 'span',
            template: template,

            events: {
                'click .save': 'save',
                'click .cancel': 'cancel'
            },

            onRender: function () {
                var editorEl = $(this.el).find('#ace')[0],
                    editor = ace.edit(editorEl);

                this.editor = editor;
                editor.getSession().setMode('ace/mode/javascript');
            },

            onShow: function () {
                $(this.el).find('.title')[0].focus();
            },

            save: function (event) {
                event.preventDefault();
                model = new Model({
                    title: $('.title')[0].value,
                    description: $('.description')[0].value,
                    language: $('.language')[0].value,
                    code: this.editor.getValue()
                });

                model.save()
                    .success(function() {
                        app.trigger('snippet:show', model);
                    });
            },

            cancel: function (event) {
                event.preventDefault();
            }
        });
    });
