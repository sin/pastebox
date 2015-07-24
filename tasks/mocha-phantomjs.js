module.exports = function(gulp, config, plugins, watch) {
    'use strict';

    if (watch) {
        return function() {
            gulp.watch([config.dir.src + 'js/**/*.js', config.dir.test + '**/*.js'], ['build:test']);
        };
    }

    return function() {
        return gulp.src(config.dir.test + 'runner.html')
            .pipe(plugins.mochaPhantomjs({reporter: 'spec'}));
    };
};
