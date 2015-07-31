define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/snippets/snippets-controller'],
    function ($, _, Backbone, Marionette, app, mainController) {

        app.addInitializer(function () {
            var Router = Marionette.AppRouter.extend({
                appRoutes: {
                    'snippets/all': 'snippets',
                    'snippets/starred': 'starred'
                },

                controller: {
                    snippets: function () {
                        mainController.show();
                    },

                    starred: function () {
                        mainController.show('starred');
                    }
                }
            });

            new Router();
        });

        app.on('snippets:all', function (options) {
            mainController.show();
            if (!options || !options.silent) {
                app.navigate('snippets/all', {trigger: false});
            }
        });

        app.on('snippets:starred', function () {
            app.navigate('snippets/all', {trigger: true});
        });

    });
