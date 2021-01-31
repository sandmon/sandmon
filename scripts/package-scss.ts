const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const run = require('gulp-run');

const projectName = 'slash-ui';
const distDir = './dist/' + projectName;

gulp.task('build:angular-package', function () {
  return run('ng build ' + projectName + ' --prod', {}).exec();
});

gulp.task('build:sass', ['build:angular-package'], function () {
  return gulp.src(['./src/lib/styles/styles.scss', './src/assets/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(distDir));
});

gulp.task('build:copy-assets', ['build:angular-package'], function () {
  return gulp.src(['src/assets/fonts/icons8/*', 'src/assets/fonts/opensans/v15/*'])
    .pipe(gulp.dest(distDir));
});

gulp.task('build', [
  'build:angular-package',
  'build:sass',
  'build:copy-assets'
]);
