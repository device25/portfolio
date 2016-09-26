'use strict';

var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var watch = require('gulp-watch');
var prefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rigger = require('gulp-rigger');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var pug = require('gulp-pug');
var pngquant = require('imagemin-pngquant');
var rimraf = require('rimraf');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var path = {
  dest: {
    html: 'prod/',
    css: 'prod/css/',
    js: 'prod/js/',
    spriteScss: '_dev/scss/_misc',
    img: 'prod/img/',
    fonts: 'prod/fonts/'
  },
  src: {
    html: '_dev/pug/pages/**/*.pug',
    css: '_dev/scss/main.scss',
    js: '_dev/js/main.js',
    sprite: '_dev/img/sprite/*.*',
    img: ['_dev/img/**/*.*', '!_dev/img/sprite/*.*'],
    fonts: '_dev/fonts/**/*.*'
  },
  watch: {
    html: '_dev/pug/**/*.pug',
    css: '_dev/scss/**/*.scss',
    js: '_dev/js/**/*.js',
    sprite: '_dev/img/sprite/*.*',
    img: '_dev/img/**/*.*',
    fonts: '_dev/fonts/**/*.*'
  },
  clean: 'prod'
};

var config = {
  server: {
    baseDir: "prod"
  },
  open: false
};

gulp.task('clean', function (cb) {
  return rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
  return gulp.src(path.src.html)
    .pipe(pug({pretty: true}).on('error', function (e) {
      console.error(e);
    }))
    .pipe(gulp.dest(path.dest.html))
    .pipe(reload({stream: true}));
});

gulp.task('css:build', function () {
  return gulp.src(path.src.css)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefixer({browsers: ['last 2 versions', '> 1%']}))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.dest.css))
    .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
  return gulp.src(path.src.js)
    .pipe(rigger())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.dest.js))
    .pipe(reload({stream: true}));
});

gulp.task('sprite:build', function () {
  var spriteData = gulp.src(path.src.sprite)
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.scss',
      cssFormat: 'scss',
      algorithm: 'binary-tree'
    }));

  spriteData.img.pipe(gulp.dest(path.dest.img));
  spriteData.css.pipe(gulp.dest(path.dest.spriteScss));

  return spriteData;
});

gulp.task('img:build', function () {
  return gulp.src(path.src.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(path.dest.img))
    .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function () {
  return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.dest.fonts));
});

gulp.task('build',
  gulp.series(
    'clean',
    gulp.parallel(
      'html:build',
      'css:build',
      'js:build',
      'fonts:build',
      'sprite:build',
      'img:build'
    )
  )
);

gulp.task('webserver', function () {
  browserSync(config);
});

gulp.task('watch', function () {
  watch(path.watch.html, gulp.series('html:build'));
  watch(path.watch.css, gulp.series('css:build'));
  watch(path.watch.fonts, gulp.series('fonts:build'));
  watch(path.watch.sprite, gulp.series('sprite:build'));
  watch(path.watch.img, gulp.series('img:build'));
  watch(path.watch.js, gulp.series('js:build'));
});

gulp.task('default', gulp.series(
  'build',
  gulp.parallel(
    'webserver',
    'watch'
  )
));