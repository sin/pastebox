define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/snippet/snippet-controller', 'models/snippet'],
    function ($, _, Backbone, Marionette, app, controller, Model) {

        var Router = Marionette.AppRouter.extend({
            appRoutes: {
                'snippets/new': 'new',
                'snippets/id/:id': 'showByID'
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

            new: function () {
                controller.new();
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
            API.new();
        });

        return {
            show: API.show
        };
    });
