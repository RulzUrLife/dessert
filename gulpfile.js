var gulp = require('gulp');

var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var clean = require ('gulp-clean');
var csslint = require('gulp-csslint');

var paths = {
    dist: 'dist',
    html: ['samples/*.html'],
    sass: ['dessert.scss', '*/*.scss'],
    css: ['dist/*.css']
};

gulp.task('build', function() {
    return gulp.src('dessert.scss')
        .pipe(sass({ style: 'compressed' }))
        .pipe(autoprefixer('last 2 version', 'ios 6', 'android 4'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('csslint', ['build'], function() {
    return gulp.src(paths.css)
        .pipe(csslint('csslintrc.json'))
        .pipe(csslint.reporter());
});

gulp.task('watch', function() {
    gulp.watch([paths.sass], ['csslint']);
});

gulp.task('clean', function() {
    return gulp.src(paths.dist, {read: false})
        .pipe(clean());
});

gulp.task('default', ['csslint']);
