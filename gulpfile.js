// gulpfile.js
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

// Compile and concatenate Sass files
gulp.task('styles', () => {
    return gulp.src('src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'));
});

// Default task: compile styles
gulp.task('default', gulp.series('styles'));

// Watch for changes in Sass files
gulp.task('watch', () => {
    gulp.watch('src/styles/**/*.scss', gulp.series('styles'));
});
