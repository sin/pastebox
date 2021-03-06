define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/main/main-view'],
    function ($, _, Backbone, Marionette, app, View) {

        return {
            show: function () {
                var view = new View();
                app.main.show(view);
                app.trigger('snippets:all', {silent: true});
                app.trigger('users:show', {silent: true});
            }
        };

    });
