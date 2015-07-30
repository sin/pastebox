define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'apps/snippet/snippet-view',
        'apps/main/main-router'],
    function ($, _, Backbone, Marionette, app, View, mainRouter) {
        var show = function (model) {
            view = new View({model: model});

            if (!app.main.hasView()) {
                mainRouter.show();
            }

            app.main.currentView.content.show(view);
            console.log('show');
        };

        return {
            show: show
        };
    });
