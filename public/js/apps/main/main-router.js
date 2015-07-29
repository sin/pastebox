define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'apps/main/main-controller'],
    function ($, _, Backbone, Marionette, app, mainCtrl) {

        var Router = Marionette.AppRouter.extend({
            appRoutes: {
                '': 'start'
            }
        });

        var API = {
            start: function () {
                console.log('main route');
                mainCtrl.show();
            }
        };

        app.addInitializer(function () {
            new Router({
                controller: API
            });
        });

        app.on('main', function () {
            app.navigate('', {trigger: true});
        });
    });
