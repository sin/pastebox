var gulp = require('gulp'),
    config = require('./gulp.json'),
    plugins = require('gulp-load-plugins')({lazy: true});

function getTask(task, watch) {
    return require(config.dir.tasks + task)(gulp, config, plugins, watch);
}

gulp.task('watch:test', getTask(config.test, true));
gulp.task('watch:styles', getTask(config.styles, true));

gulp.task('build:test', getTask(config.test, false));
gulp.task('build:styles', getTask(config.styles, false));

gulp.task('serve', getTask(config.serve));

gulp.task('test', ['watch:test']);
gulp.task('watch', ['watch:test', 'watch:styles']);
gulp.task('default', ['serve', 'watch']);
