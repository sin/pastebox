define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'apps/list/list-view',
        'apps/main/main-router', 'collections/snippets'],
    function ($, _, Backbone, Marionette, app, View, mainRouter, Snippets) {
        var show = function () {
            var snippets = new Snippets(),
                view = new View({collection: snippets});

            if (!app.main.hasView()) {
                mainRouter.show();
            }

            app.main.currentView.list.show(view);
        };

        return {
            show: show
        };
    });
