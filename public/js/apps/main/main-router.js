define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/main/main-controller'],
    function ($, _, Backbone, Marionette, app, controller) {

        app.addInitializer(function () {
            var Router = Marionette.AppRouter.extend({
                appRoutes: {
                    '': 'show'
                },
                controller: {
                    show: function () {
                        controller.show();
                    }
                }
            });

            new Router();
        });

        app.on('main:show', function () {
            app.navigate('', {trigger: true});
        });

    });
