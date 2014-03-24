var gulp = require('gulp');

var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var clean = require ('gulp-clean');
var csslint = require('gulp-csslint');

var paths = {
    dist: 'dist',
    html: 'samples/*.html',
    sass: ['dessert.scss', '*/*.scss'],
    css: 'dist/*.css',
    fonts: 'fonts/**/*.*'
};

// Compile SASS (compressed)
gulp.task('sass:dist', function() {
    return gulp.src('dessert.scss')
        .pipe(sass({ style: 'compressed' }))
        .pipe(autoprefixer('last 2 version', 'ios 6', 'android 4'))
        .pipe(csslint('csslintrc.json'))
        .pipe(csslint.reporter())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.dist));
});

// Compile SASS (expanded)
gulp.task('sass', function() {
    return gulp.src('dessert.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'ios 6', 'android 4'))
        .pipe(csslint('csslintrc.json'))
        .pipe(csslint.reporter())
        .pipe(gulp.dest(paths.dist));
});

// Copy all fonts
gulp.task('fonts', function() {
 return gulp.src(paths.fonts, { base: './' })
    .pipe(gulp.dest(paths.dist));
});

// Watches change in SASS files
gulp.task('watch', function() {
    gulp.watch([paths.sass], ['build']);
});

// Clean dist directory
gulp.task('clean', function() {
    return gulp.src(paths.dist, {read: false})
        .pipe(clean());
});

gulp.task('build:dist', ['clean', 'fonts', 'sass:dist']);
gulp.task('build', ['clean', 'fonts', 'sass']);
gulp.task('default', ['build']);
