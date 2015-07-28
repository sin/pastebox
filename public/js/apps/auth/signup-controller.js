define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'apps/auth/signup-view'],
    function ($, _, Backbone, Marionette, app, SignupView) {
        var show = function () {
            var view = new SignupView();
            app.main.show(view);
        };

        return {
            show: show
        };
    });
