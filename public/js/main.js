require.config({
    baseUrl: 'js',
    paths: {
        jquery: '../libs/jquery/dist/jquery',
        underscore: '../libs/lodash/lodash',
        backbone: '../libs/backbone/backbone',
        marionette: '../libs/marionette/lib/backbone.marionette',
        mustache: '../libs/mustache/mustache',
        text: '../libs/requirejs-text/text',
        prism: '../libs/prism/prism'
    },
    shim: {
        prism: {
            exports: 'Prism'
        }
    }
});

require(['app'], function(App) {
    App.init();
});
