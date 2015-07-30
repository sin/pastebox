define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'apps/main/main-router',
        'apps/snippet/snippet-view-show', 'apps/snippet/snippet-view-edit', 'models/snippet'],
    function ($, _, Backbone, Marionette, app, mainRouter, ShowView, EditView, Model) {
        var show = function (model) {
            var view = new ShowView({model: model});

            if (!app.main.hasView()) {
                mainRouter.show();
                app.trigger('snippets:all', { silent: true });
            }

            app.main.currentView.content.show(view);
        };

        var edit = function (model) {
            if (!model) {
                model = new Model();
            }

            var view = new EditView({model: model});

            if (!app.main.hasView()) {
                mainRouter.show();
                app.trigger('snippets:all', { silent: true });
            }

            app.main.currentView.content.show(view);
        };

        return {
            show: show,
            edit: edit
        };
    });
