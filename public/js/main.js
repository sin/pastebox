require.config({
    baseUrl: '/js',
    paths: {
        jquery: '../libs/jquery/dist/jquery',
        underscore: '../libs/lodash/lodash',
        backbone: '../libs/backbone/backbone',
        marionette: '../libs/marionette/lib/backbone.marionette',
        mustache: '../libs/mustache/mustache',
        text: '../libs/requirejs-text/text',
        prism: '../libs/prism/prism',
        mousetrap: '../libs/mousetrap/mousetrap',
        moment: '../libs/moment/moment',
        ace: '../libs/ace/lib/ace/'
    },
    waitSeconds: 3,
    shim: {
        prism: {
            exports: 'Prism'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        }
    }
});

require(['app'], function (app) {
    app.start();
});
