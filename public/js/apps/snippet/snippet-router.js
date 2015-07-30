define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/snippet/snippet-controller', 'models/snippet'],
    function ($, _, Backbone, Marionette, app, controller, Model) {

        var Router = Marionette.AppRouter.extend({
            appRoutes: {
                'snippets/new': 'edit',
                'snippets/id/:id': 'showByID',
                'snippets/edit/:id': 'editByID'
            }
        });

        var API = {
            show: function (model) {
                controller.show(model);
            },

            showByID: function (id) {
                var model = new Model({
                    _id: id
                });
                model.fetch({
                    success: function () {
                        controller.show(model);
                    }
                });
            },

            edit: function (model) {
                controller.edit(model);
            },

            editByID: function (id) {
                var model = new Model({
                    _id: id
                });
                model.fetch({
                    success: function () {
                        controller.edit(model);
                    }
                });
            }
        };

        app.addInitializer(function () {
            new Router({
                controller: API
            });
        });

        app.on('snippet:show', function (model) {
            app.navigate('snippets/id/' + model.get('_id'), {trigger: false});
            API.show(model);
        });

        app.on('snippets:new', function () {
            app.navigate('snippets/new', {trigger: false});
            API.edit();
        });

        app.on('snippets:edit', function (model) {
            app.navigate('snippets/edit/' + model.get('_id'), {trigger: false});
            API.edit(model);
        });

        return {
            show: API.show,
            edit: API.edit
        };
    });
