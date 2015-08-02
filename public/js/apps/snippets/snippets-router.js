define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/snippets/snippets-controller'],
    function ($, _, Backbone, Marionette, app, controller) {

        app.addInitializer(function () {
            var Router = Marionette.AppRouter.extend({
                appRoutes: {
                    'snippets/all': 'snippets',
                    'snippets/starred': 'starred',
                    'snippets/user/:id': 'user',
                    'snippets/search/:search': 'search'
                },

                controller: {
                    snippets: function () {
                        controller.showAll();
                    },

                    starred: function () {
                        controller.starred();
                    },

                    user: function (id) {
                        controller.user(id);
                    },

                    search: function (keyword) {
                        controller.search(keyword);
                    }
                }
            });

            new Router();
        });

        app.on('snippets:all', function (options) {
            controller.showAll();
            if (!options || !options.silent) {
                app.navigate('snippets/all', {trigger: false});
            }
        });

        app.on('snippets:starred', function () {
            app.navigate('snippets/all', {trigger: true});
        });

        app.on('snippets:user', function (user) {
            var id = user.get('_id');
            app.navigate('snippets/user/' + id, {trigger: false});
            controller.user(id);
        });

        app.on('snippets:search', function (keyword) {
            app.navigate('snippets/search/' + keyword, {trigger: false});
            controller.search(keyword);
        });

    });
