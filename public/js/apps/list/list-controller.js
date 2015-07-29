define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'apps/list/list-view',
        'apps/main/main-router'],
    function ($, _, Backbone, Marionette, app, View, mainRouter) {
        var show = function () {
            var view = new View()
            mainRouter.show();
            console.log(app.main)
            app.main.currentView.list.show(view);
        };

        return {
            show: show
        };
    });
