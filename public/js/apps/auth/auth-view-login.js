define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'text!templates/auth-login.html'],
    function ($, _, Backbone, Marionette, app, template) {

        return Marionette.ItemView.extend({
            className: 'login column',
            template: template,

            events: {
                'click .signup-link': 'clickSignupLink',
                'submit .login-form': 'submitForm'
            },

            clickSignupLink: function (event) {
                app.trigger('auth:signup');
                event.preventDefault();
            },

            submitForm: function (event) {
                var serializedForm = this.$el.find('.login-form').serialize();

                $.post('/auth/login', serializedForm)
                    .done(function(req) {
                        app.setToken(req.token);
                        app.setUser(req.user);
                        app.trigger('main:show');
                        app.trigger('header:update');
                    })
                    .fail(function() {
                        $('.control-group').addClass('has-error');
                    });

                event.preventDefault();
            }
        });

    });
