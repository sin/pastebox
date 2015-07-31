define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/snippet/snippet-controller'],
    function ($, _, Backbone, Marionette, app, controller) {

        var API = {
                show: function (model) {
                    controller.show(model);
                },

                edit: function (model) {
                    controller.edit(model);
                }
            },

            Router = Marionette.AppRouter.extend({
                appRoutes: {
                    'snippets/new': 'edit',
                    'snippets/id/:id': 'show',
                    'snippets/edit/:id': 'edit'
                },
                controller: API
            });

        app.addInitializer(function () {
            new Router();
        });

        app.on('snippet:show', function (model) {
            var id = model.get('_id');
            app.navigate('snippets/id/' + id, {trigger: false});
            API.show(model);
        });

        app.on('snippet:new', function () {
            app.navigate('snippets/new', {trigger: false});
            API.edit();
        });

        app.on('snippet:edit', function (model) {
            var id = model.get('_id');
            app.navigate('snippets/edit/' + id, {trigger: false});
            API.edit(model);
        });

    });
