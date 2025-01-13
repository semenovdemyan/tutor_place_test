import { src, dest, watch, series, parallel } from 'gulp';
import sass from 'sass'; // Импортируем sass
import gulpSass from 'gulp-sass'; // Импортируем gulp-sass
import pug from 'gulp-pug';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';
import { deleteAsync } from 'del';

// Инициализация компилятора SCSS
const sassCompiler = gulpSass(sass); // Связываем gulp-sass с sass

const paths = {
  pug: 'src/pug/**/*.pug',
  scss: 'src/scss/**/*.scss',
  js: 'src/js/**/*.js',
  dist: 'dist/',
};

function compilePug() {
  return src('src/pug/**/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(dest(paths.dist))
    .pipe(browserSync.stream());
}

function compileScss() {
  return src('src/scss/main.scss')
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(paths.dist + 'css'))
    .pipe(browserSync.stream());
}

function compileJs() {
  return src(paths.js)
    .pipe(concat('main.js'))
    .pipe(dest(paths.dist + 'js'))
    .pipe(browserSync.stream());
}

function clean() {
  return deleteAsync([paths.dist]);
}

function serve() {
  browserSync.init({
    server: {
      baseDir: paths.dist,
    },
  });
  watch(paths.pug, compilePug);
  watch(paths.scss, compileScss);
  watch(paths.js, compileJs);
}

export default series(
  clean,
  parallel(compilePug, compileScss, compileJs),
  serve
);
