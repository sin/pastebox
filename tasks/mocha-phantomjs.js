module.exports = function(gulp, config, plugins, watch) {
    'use strict';

    return function() {
        return gulp.src(config.dir.test + 'runner.html')
            .pipe(plugins.mochaPhantomjs({reporter: 'spec'}));
    };
};
