module.exports = function(gulp, config) {
    'use strict';

    var browserSync = require('browser-sync');

    return function() {
        browserSync(config.browsersync);
    };
};
