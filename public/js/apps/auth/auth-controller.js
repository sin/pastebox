define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/auth/auth-view-login', 'apps/auth/auth-view-signup'],
    function ($, _, Backbone, Marionette, app, LoginView, SignupView) {

        return {
            login: function () {
                var view = new LoginView();
                app.main.show(view);
            },

            signup: function () {
                var view = new SignupView();
                app.main.show(view);
            }
        };

    });
