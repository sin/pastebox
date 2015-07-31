define(['jquery', 'underscore', 'backbone', 'marionette', 'mustache', 'global',
        'text!templates/header-show.html'],
    function ($, _, Backbone, Marionette, Mustache, app, template) {

        return Marionette.ItemView.extend({
            className: 'container-fluid',
            template: template,

            events: {
                'click .navbar-brand': 'clickLogo',
                'click .profile-link': 'clickProfile',
                'click .logout-link': 'clickLogout',
                'click .login-link': 'clickLogin',
                'click .signup-link': 'clickSignup'
            },

            serializeData: function () {
                return {
                    user: app.getUser()
                };
            },

            clickLogo: function (event) {
                app.getUser() ? app.trigger('main:show') : app.trigger('auth:login');
                event.preventDefault();
            },

            clickProfile: function (event) {
                app.trigger('profile');
                event.preventDefault();
            },

            clickLogout: function (event) {
                app.clearSession();
                this.render();
                app.trigger('auth:login');
                event.preventDefault();
            },

            clickLogin: function (event) {
                app.trigger('auth:login');
                event.preventDefault();
            },

            clickSignup: function (event) {
                app.trigger('auth:signup');
                event.preventDefault();
            }
        });

    });
