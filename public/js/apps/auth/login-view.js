define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'text!templates/login.html'],
    function ($, _, Backbone, Marionette, app, template) {
        return Marionette.ItemView.extend({
            className: 'login column',
            template: template,

            events: {
                'click .signup-link': 'signupLink',
                'submit .login-form': 'loginForm'
            },

            signupLink: function (event) {
                event.preventDefault();
                app.trigger('auth:signup');
            },

            loginForm: function (event) {
                event.preventDefault();
                $.post('auth/login', $('.login-form').serialize())
                    .done(function(req) {
                        app.setToken(req.token);
                        app.setUser(req.user);
                        app.trigger('main');
                        app.trigger('header:update');
                    })
                    .fail(function() {
                        $('.control-group').addClass('has-error');
                    });
            }
        });
    });
