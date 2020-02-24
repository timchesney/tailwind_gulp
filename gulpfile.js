const { src, dest, series, watch } = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const pug = require('gulp-pug');


function css(cb) {
  return src('css/*.css')
    .pipe(postcss([
      tailwindcss,
      autoprefixer
    ]))
    .pipe(dest('build/'));
  cb();
}

function pugness(cb) {
  return src('src/*.pug')
  .pipe(pug({
    // Options
  }))
  .pipe(dest('build/'))
  cb();
}

exports.default = function() {
  watch('src/*.pug', series(css, pugness));
};
