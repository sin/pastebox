define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'text!templates/signup.html'],
    function ($, _, Backbone, Marionette, app, template) {
        return Marionette.ItemView.extend({
            className: 'login column',
            template: template,

            events: {
                'click .login-link': 'loginLink',
                'submit .signup-form': 'signupForm'
            },

            loginLink: function (e) {
                e.preventDefault();
                app.trigger('auth:login');
            },

            signupForm: function (event) {
                event.preventDefault();
                $.post('auth/signup', $('.signup-form').serialize())
                    .done(function() {
                        app.trigger('auth:login');
                    })
                    .fail(function() {
                        $('.control-group').addClass('has-error');
                    });
            }
        });
    });
