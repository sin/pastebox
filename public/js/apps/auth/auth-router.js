define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/auth/login-controller', 'apps/auth/signup-controller'],
    function ($, _, Backbone, Marionette, app, loginCtrl, signupCtrl) {

        var Router = Marionette.AppRouter.extend({
            appRoutes: {
                login: 'login',
                signup: 'signup'
            }
        });

        var API = {
            login: function () {
                loginCtrl.show();
            },

            signup: function () {
                signupCtrl.show();
            }
        };

        app.addInitializer(function () {
            new Router({
                controller: API
            });
        });

        app.on('auth:login', function () {
            app.navigate('login', {trigger: true});
        });

        app.on('auth:signup', function () {
            app.navigate('signup', {trigger: true});
        });
    });
