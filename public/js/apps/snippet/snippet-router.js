define(['jquery', 'underscore', 'backbone', 'marionette', 'global', 'apps/snippet/snippet-controller'],
    function ($, _, Backbone, Marionette, app, controller) {

        var Router = Marionette.AppRouter.extend({
            appRoutes: {
            }
        });

        var API = {
            show: function (model) {
                controller.show(model);
            }
        };

        app.addInitializer(function () {
            new Router({
                controller: API
            });
        });

        app.on('snippet:show', function (model) {
            app.navigate('snippets/' + model.get('_id'), {trigger: false});
            API.show(model);
        });

        return {
            show: API.show
        };
    });
