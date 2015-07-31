define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/auth/auth-controller'],
    function ($, _, Backbone, Marionette, app, controller) {

        app.addInitializer(function () {
            var Router = Marionette.AppRouter.extend({
                appRoutes: {
                    login: 'login',
                    signup: 'signup'
                },
                controller: {
                    login: function () {
                        controller.login();
                    },

                    signup: function () {
                        controller.signup();
                    }
                }
            });

            new Router();
        });

        app.on('auth:login', function () {
            app.navigate('login', {trigger: true});
        });

        app.on('auth:signup', function () {
            app.navigate('signup', {trigger: true});
        });

    });
