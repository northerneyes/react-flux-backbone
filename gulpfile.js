//var gulp = require('gulp')
//
//var browserSync = require('browser-sync');
//var reload = browserSync.reload;
//var nodemon = require('gulp-nodemon');
//var sass = require('gulp-sass');
//var uglify = require('gulp-uglify');
//var concat = require('gulp-concat');
//var gulpLoadPlugins = require('gulp-load-plugins'),
//    plugins = gulpLoadPlugins();
//// browser-sync task for starting the server.
//var dest = "./public/dist";
//var src = './public/src';
//
//gulp.task('browser-sync', function () {
//    var files = [
//        dest + "/**",
//        // Exclude Map files
//        "!" + dest + "/**.map"
//    ];
//    browserSync.init(files, {
//            //server: {
//            //    baseDir: [dest, src]
//            //},
//            proxy: "http://localhost:8080",
//            //port: 8080
//        }
//    );
//
//});
//
//gulp.task('js', function () {
//    return gulp.src('public/src/js/**/*.js')
//        .pipe(plugins.jshint())
//        .pipe(uglify())
//        .pipe(concat('app.min.js'))
//        .pipe(gulp.dest('public/dist/js'));
//});
//
//gulp.task('nodemon', function (cb) {
//    var called = false;
//    return nodemon({
//        script: 'server.js'
//    }).on('start', function () {
//        if (!called) {
//            called = true;
//            cb();
//        }
//    });
//});
//
//
//// Default task to be run with `gulp`
////nodemon before browser-sync strictly!!!
//gulp.task('default', ['js', 'nodemon', 'browser-sync'], function () {
//    gulp.watch("src/project/**/*.js", ['js']);
//});
var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });