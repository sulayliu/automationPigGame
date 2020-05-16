const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

function minifyCSS() {
  return gulp.src('src/*.css')
  .pipe(cleanCSS())
  .pipe(gulp.dest('dist'));
}

function minifyImage() {
  return gulp.src('src/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist'));
}


exports.default = gulp.parallel(minifyCSS, minifyImage);