//noinspection JSUnusedLocalSymbols
define(['jquery', 'underscore', 'backbone', 'marionette', 'mustache', 'global', 'keys',
        'apps/auth/auth-router', 'apps/main/main-router', 'apps/header/header-controller',
        'apps/list/list-router', 'apps/snippet/snippet-router'],
    function ($, _, Backbone, Marionette, Mustache, app) {
        if (window.__agent) {
            window.__agent.start(Backbone, Marionette);
        }

        app.addRegions({
            main: '.app',
            header: '.navbar'
        });

        app.navigate = function (route, options) {
            options || (options = {});
            Backbone.history.navigate(route, options);
        };

        app.getCurrentRoute = function () {
            return Backbone.history.fragment;
        };

        app.getToken = function () {
            return window.localStorage.getItem('token');
        };

        app.setToken = function (token) {
            window.localStorage.setItem('token', token);
            return app.getToken();
        };

        app.getUser = function () {
            return JSON.parse(window.localStorage.getItem('user'));
        };

        app.setUser = function (user) {
            window.localStorage.setItem('user', JSON.stringify(user));
            return app.getToken();
        };

        app.clearSession = function () {
            window.localStorage.removeItem('user');
            window.localStorage.removeItem('token');
        };

        var backboneSync = Backbone.sync;

        Backbone.sync = function (method, model, options) {
            var token = window.localStorage.getItem('token');

            if (token) {
                options.headers = {
                    'x-access-token': token
                };
            }

            return backboneSync(method, model, options);
        };

        Marionette.Renderer.render = function (template, data) {
            // jscs:disable
            return Mustache.to_html(template, data);

            // jscs:enable
        };

        app.on('start', function () {
            Backbone.history.start({pushState: true});
            app.trigger('header:show');
            var route = app.getCurrentRoute(),
                token = app.getToken(),
                authenticate = function () {
                    $.ajax({
                        url: '/auth/login',
                        type: 'get',
                        headers: {
                            'x-access-token': token
                        },
                        success: function (res) {
                            var redirect = (route === 'login' || route === 'signup');
                            route = redirect ? '' : route;
                            app.setUser(res);
                            app.navigate(route, {trigger: true});
                        },

                        error: function () {
                            app.clearSession();
                            app.navigate('login', {trigger: true});
                        }
                    });
                };

            if (token) {
                authenticate();
            } else {
                route = (route == 'signup') ? route : 'login';
                app.navigate(route, {trigger: true});
            }
        });

        return app;
    });
