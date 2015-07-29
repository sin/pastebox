define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'apps/main/main-controller'],
    function ($, _, Backbone, Marionette, app, mainCtrl) {

        var Router = Marionette.AppRouter.extend({
            appRoutes: {
                '': 'show'
            }
        });

        var API = {
            show: function () {
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

        return {
            show: API.show
        };
    });
