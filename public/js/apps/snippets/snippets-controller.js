define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/main/main-controller', 'apps/snippets/snippets-view', 'collections/snippets'],
    function ($, _, Backbone, Marionette, app, mainController, View, Snippets) {

        return {
            showAll: function () {
                var snippets = new Snippets(),
                    view = new View({collection: snippets});

                snippets.fetch();

                if (!app.main.hasView()) {
                    mainController.show();
                }

                app.main.currentView.list.show(view);
            },

            starred: function () {
                var snippets = new Snippets(),
                    view = new View({collection: snippets});

                snippets.fetch();

                if (!app.main.hasView()) {
                    mainController.show();
                }

                app.main.currentView.list.show(view);
            },

            user: function (user) {
                var state = {
                    sortBy: 'created',
                    sortOrder: 0,
                    filterBy: 'user',
                    filter: user,
                    filterInvert: false
                };

                var snippets = new Snippets(),
                    view = new View({
                        collection: snippets,
                        state: state
                    });

                snippets.fetch({data: $.param(state)});

                if (!app.main.hasView()) {
                    mainController.show();
                }

                app.main.currentView.list.show(view);
            },

            search: function (keyword) {
                var state = {
                    sortBy: 'created',
                    sortOrder: 0,
                    search: keyword
                };

                var snippets = new Snippets(),
                    view = new View({
                        collection: snippets,
                        state: state
                    });

                snippets.fetch({data: $.param(state)});

                if (!app.main.hasView()) {
                    mainController.show();
                }

                app.main.currentView.list.show(view);
            }
        };

    });
