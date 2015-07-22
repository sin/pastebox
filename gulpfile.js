var gulp = require('gulp'),
    config = require('./gulp.json'),
    plugins = require('gulp-load-plugins')({lazy: true});

function getTask(task, watch) {
    return require(config.dir.tasks + task)(gulp, config, plugins, watch);
}

gulp.task('test', getTask(config.test, false));
gulp.task('default', ['test']);
