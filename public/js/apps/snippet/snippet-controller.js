define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'apps/snippet/snippet-view',
        'apps/main/main-router', 'apps/snippet/new-view'],
    function ($, _, Backbone, Marionette, app, View, mainRouter, NewView) {
        var show = function (model) {
            view = new View({model: model});

            if (!app.main.hasView()) {
                mainRouter.show();
                app.trigger('snippets:all', { silent: true });
            }

            app.main.currentView.content.show(view);
        };

        var newSnippet = function () {
            view = new NewView();

            if (!app.main.hasView()) {
                mainRouter.show();
                app.trigger('snippets:all', { silent: true });
            }

            app.main.currentView.content.show(view);
        };

        return {
            show: show,
            new: newSnippet
        };
    });
