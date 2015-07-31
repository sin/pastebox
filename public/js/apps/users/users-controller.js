define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/main/main-controller',
        'collections/users',
        'apps/users/users-view'],
    function ($, _, Backbone, Marionette, app, mainController, Collection, View) {

        var show = function () {
            var collection = new Collection(),
                view = new View({collection: collection});

            app.users = collection;

            if (!app.main.hasView()) {
                mainController.show();
            }

            app.main.currentView.users.show(view);
        };

        app.on('users:show', function () {
            show();
        });

        return {
            show: show
        };

    });
