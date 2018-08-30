var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');


gulp.task('styles', function () {
    return gulp.src('app/css/*.css')
        .pipe(concatCss("styles/bundle.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/'));
});

var concat = require('gulp-concat');
var uglyfly = require('gulp-uglyfly');

gulp.task('scripts', function() {
    return gulp.src('./app/js/*.js')
        .pipe(concat('script.js'))
        .pipe(uglyfly())
        .pipe(gulp.dest('./dist/js/'));
});

var imagemin = require('gulp-imagemin');

gulp.task('images', () =>
    gulp.src('./app/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);