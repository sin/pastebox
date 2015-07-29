define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'apps/list/list-controller'],
    function ($, _, Backbone, Marionette, app, mainCtrl) {

        var Router = Marionette.AppRouter.extend({
            appRoutes: {
                '': 'snippets',
                'snippets/all': 'snippets',
                'snippets/starred': 'starred'
            }
        });

        var API = {
            snippets: function () {
                mainCtrl.show();
            },

            starred: function () {
                mainCtrl.show('starred');
            }
        };

        app.addInitializer(function () {
            new Router({
                controller: API
            });
        });

        app.on('snippets:all', function () {
            app.navigate('snippets/all', {trigger: true});
        });

        app.on('snippets:starred', function () {
            app.navigate('snippets/all', {trigger: true});
        });
    });
