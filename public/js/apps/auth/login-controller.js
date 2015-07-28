define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'apps/auth/login-view'],
    function ($, _, Backbone, Marionette, app, LoginView) {
        var show = function () {
            var view = new LoginView();
            app.main.show(view);
        };

        return {
            show: show
        };
    });
