define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'text!templates/auth-signup.html'],
    function ($, _, Backbone, Marionette, app, template) {

        return Marionette.ItemView.extend({
            className: 'login column',
            template: template,

            events: {
                'click .login-link': 'clickLoginLink',
                'submit .signup-form': 'submitForm'
            },

            clickLoginLink: function (event) {
                app.trigger('auth:login');
                event.preventDefault();
            },

            submitForm: function (event) {
                var serializedForm = this.$el.find('.signup-form').serialize();

                $.post('/auth/signup', serializedForm)
                    .done(function () {
                        app.trigger('auth:login');
                    })
                    .fail(function () {
                        $('.control-group').addClass('has-error');
                    });

                event.preventDefault();
            }
        });

    });
