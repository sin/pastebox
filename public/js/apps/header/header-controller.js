define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/header/header-view'],
    function ($, _, Backbone, Marionette, app, View) {

        var view,
            show = function () {
                view = new View();
                app.header.show(view);
            },

            update = function () {
                view.render();
            };

        app.on('header:show', function () {
            show();
        });

        app.on('header:update', function () {
            update();
        });

        return {
            show: show,
            update: update
        };

    });
