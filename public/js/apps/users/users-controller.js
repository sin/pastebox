define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'apps/users/users-view',
        'apps/main/main-router', 'collections/users'],
    function ($, _, Backbone, Marionette, app, View, mainRouter, Users) {
        var show = function () {
            var users = new Users(),
                view = new View({collection: users});

            app.users = users;
            if (!app.main.hasView()) {
                mainRouter.show();
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
