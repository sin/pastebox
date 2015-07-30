define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'apps/snippet/snippet-view',
        'apps/main/main-router'],
    function ($, _, Backbone, Marionette, app, View, mainRouter) {
        var show = function (model) {
            view = new View({model: model});

            if (!app.main.hasView()) {
                mainRouter.show();
                app.trigger('snippets:all', { silent: true });
            }

            app.main.currentView.content.show(view);
        };

        return {
            show: show
        };
    });
