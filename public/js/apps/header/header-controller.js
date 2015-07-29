define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'apps/header/header-view'],
    function ($, _, Backbone, Marionette, app, View) {
        var view;

        var show = function () {
            view = new View();
            app.header.show(view);
        };

        var update = function () {
            view.render();
        };

        app.on('header:update', function () {
            update();
        });

        app.on('header:show', function () {
            show();
        });

        return {
            show: show,
            update: update
        };
    });
