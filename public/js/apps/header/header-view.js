define(['jquery', 'underscore', 'backbone', 'marionette', 'mustache', 'global', 'text!templates/header.html'],
    function ($, _, Backbone, Marionette, Mustache, app, template) {
        return Marionette.ItemView.extend({
            className: 'container-fluid',
            template: template,

            events: {
                'click .navbar-brand': 'brand',
                'click .profile-link': 'profile',
                'click .logout-link': 'logout',
                'click .login-link': 'login',
                'click .signup-link': 'signup'
            },

            brand: function (event) {
                event.preventDefault();
                app.getUser() ? app.trigger('main') : app.trigger('auth:login');
            },

            profile: function (event) {
                event.preventDefault();
                app.trigger('profile');
            },

            logout: function (event) {
                event.preventDefault();
                app.clearSession();
                this.render();
                app.trigger('auth:login');
            },

            login: function () {
                event.preventDefault();
                app.trigger('auth:login');
            },

            signup: function () {
                event.preventDefault();
                app.trigger('auth:signup');
            },

            render: function () {
                // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
                var rendered = Mustache.to_html(this.template, {user: app.getUser()});

                // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
                $(this.el).html(rendered);
                return this;
            }
        });
    });
