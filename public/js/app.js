//noinspection JSUnusedLocalSymbols
define(['jquery', 'underscore', 'backbone', 'prism'], function($, _, Backbone, Prism) {
    var init = function() {
        console.log('Hello world');
        Prism.highlightAll();
    };

    return {
        init: init
    };
});
