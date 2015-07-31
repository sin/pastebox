define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/main/main-controller',
        'apps/snippet/snippet-view-show', 'apps/snippet/snippet-view-edit',
        'models/snippet'],
    function ($, _, Backbone, Marionette, app, mainController, ShowView, EditView, Model) {

        var createModel = function (model, View) {
            if (typeof model === 'string') {
                var id = model;
                model = new Model({
                    _id: id
                });
                model.fetch({
                    success: function (model) {
                        renderView(model, View);
                    }
                });
            } else {
                renderView(model, View);
            }
        };

        var renderView = function (model, View) {
            var view = new View({model: model});

            if (!app.main.hasView()) {
                mainController.show();
                app.trigger('snippets:all', {silent: true});
            }

            app.main.currentView.content.show(view);
        };

        return {
            show: function (model) {
                createModel(model, ShowView);
            },

            edit: function (model) {
                createModel(model, EditView);
            }
        };

    });
