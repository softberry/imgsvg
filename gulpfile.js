const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();


gulp.task('default', () => {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
});
gulp.task('deploy', () => {
    gulp.src('src/index.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename('imgsvg.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dest/'));
})