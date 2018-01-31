var gulp        = require('gulp');
var browserSync = require('browser-sync').create();



// or...

gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
});