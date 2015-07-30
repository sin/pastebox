define(['underscore', 'backbone', 'mousetrap', 'global'], function(_, Backbone, Mousetrap, app) {
    Mousetrap.bind('command+alt+n', function(event) {
        app.trigger('snippets:new');
    });

    Mousetrap.bind(['command+alt+a'], function(event) {
        app.trigger('snippets:all');
    });

    Mousetrap.bind(['command+alt+s'], function(event) {
        app.trigger('snippets:starred');
    });
});
