define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/main/main-controller', 'apps/snippets/snippets-view', 'collections/snippets'],
    function ($, _, Backbone, Marionette, app, mainController, View, Snippets) {

        return {
            show: function () {
                var snippets = new Snippets(),
                    view = new View({collection: snippets});

                if (!app.main.hasView()) {
                    mainController.show();
                }

                app.main.currentView.list.show(view);
            }
        };

    });
