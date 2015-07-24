module.exports = function(gulp, config, plugins, watch) {
    'use strict';

    if (watch) {
        return function() {
            gulp.watch([config.dir.src + 'less/**/*.less'], ['build:styles']);
        };
    }

    return function(cb) {
        return gulp.src(config.dir.src + 'less/main.less')
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.less(config.less))
            .on('error', function(err) {
                plugins.util.log(err.type + 'Error:', err.message);
                cb();
            })
            .pipe(plugins.minifyCss())
            .pipe(plugins.autoprefixer())
            .pipe(plugins.rename({suffix: '.min'}))
            .pipe(plugins.sourcemaps.write('./maps'))
            .pipe(gulp.dest(config.dir.dist + 'css/'));
    };

};
