'use strict';

var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  clean = require('gulp-clean'),
  csslint = require('gulp-csslint'),
  shell = require('gulp-shell'),
  paths = {
    dist: 'dist',
    html: 'samples/*.html',
    sass: ['dessert.scss', '*/*.scss'],
    css: 'dist/*.css',
    fonts: 'fonts/**/*.*'
  };

paths.bower_repo = paths.dist +  '/bower-dessert';

// Compile SASS (compressed)
gulp.task('sass:dist', function () {
  return gulp.src('dessert.scss')
    .pipe(sass({ style: 'compressed' }))
    .pipe(autoprefixer('last 2 version', 'ios 6', 'android 4'))
    .pipe(csslint('csslintrc.json'))
    .pipe(csslint.reporter())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.dist));
});

// Compile SASS (expanded)
gulp.task('sass', function () {
  return gulp.src('dessert.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'ios 6', 'android 4'))
    .pipe(csslint('csslintrc.json'))
    .pipe(csslint.reporter())
    .pipe(gulp.dest(paths.dist));
});

// Copy all fonts
gulp.task('fonts', function () {
  return gulp.src(paths.fonts, { base: './'})
    .pipe(gulp.dest(paths.dist));
});

// Watches change in SASS files
gulp.task('watch', function () {
  gulp.watch([paths.sass], ['build']);
});

// Clean dist directory
gulp.task('clean', function () {
  return gulp.src(paths.dist, {read: false})
    .pipe(clean());
});

gulp.task(
  'clone_bower',
  shell.task([
    //must return true, otherwise it makes gulp fail
    '[[ -a dist/bower-dessert ]] && rm -r dist/bower-dessert || true',
    'git clone https://github.com/RulzUrLife/bower-dessert ' + paths.bower_repo
  ])
);

gulp.task('bower', ['build:dist', 'clone_bower'], function () {
  return gulp.src([paths.dist + '/**/*', '!' + paths.bower_repo + '{,/**}'])
    .pipe(gulp.dest(paths.bower_repo));
});

gulp.task('build:dist', ['build', 'sass:dist']);
gulp.task('build', ['fonts', 'sass']);
gulp.task('default', ['build']);
