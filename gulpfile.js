'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var prefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rigger = require('gulp-rigger');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var rimraf = require('rimraf');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var path = {
  dest: {
    html: 'prod/',
    css: 'prod/css/',
    js: 'prod/js/',
    img: 'prod/img/',
    fonts: 'prod/fonts/'
  },
  src: {
    html: '_dev/**/*.html',
    css: '_dev/scss/main.scss',
    js: '_dev/js/main.js',
    img: '_dev/img/**/*.*',
    fonts: '_dev/fonts/**/*.*'
  },
  watch: {
    html: '_dev/**/*.html',
    css: '_dev/scss/**/*.scss',
    js: '_dev/js/**/*.js',
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
  },
  configTunnel = {
    server: {
      baseDir: "prod"
    },
    tunnel: true,
    browser: 'Google Chrome',
    open: 'tunnel'
  };

gulp.task('html:build', function () {
  gulp.src(path.src.html) //Выберем файлы по нужному пути
    .pipe(rigger()) //Прогоним через rigger
    .pipe(gulp.dest(path.dest.html)) //Выплюнем их в папку build
    .pipe(reload({ stream: true })); //И перезагрузим наш сервер для обновлений
});

gulp.task('js:build', function () {
  gulp.src(path.src.js) //Найдем наш main файл
    .pipe(rigger()) //Прогоним через rigger
    .pipe(sourcemaps.init()) //Инициализируем sourcemap
    .pipe(uglify()) //Сожмем наш js
    .pipe(sourcemaps.write('.')) //Пропишем карты
    .pipe(gulp.dest(path.dest.js)) //Выплюнем готовый файл в build
    .pipe(reload({ stream: true })); //И перезагрузим сервер
});

gulp.task('css:build', function () {
  gulp.src(path.src.css) //Выберем наш main.scss
    .pipe(sourcemaps.init()) //То же самое что и с js
    .pipe(sass().on('error', sass.logError)) //Скомпилируем
    .pipe(prefixer()) //Добавим вендорные префиксы
    .pipe(cleanCSS()) //Сожмем
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.dest.css)) //И в build
    .pipe(reload({ stream: true }));
});

gulp.task('img:build', function () {
  gulp.src(path.src.img) //Выберем наши картинки
    .pipe(imagemin({ //Сожмем их
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(path.dest.img)) //И бросим в build
    .pipe(reload({ stream: true }));
});

gulp.task('fonts:build', function () {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.dest.fonts));
});

gulp.task('build', [
  'html:build',
  'css:build',
  'fonts:build',
  'img:build',
  'js:build'
]);

gulp.task('watch', function () {
  watch([path.watch.html], function () {
    gulp.start('html:build');
  });
  watch([path.watch.css], function () {
    gulp.start('css:build');
  });
  watch([path.watch.fonts], function () {
    gulp.start('fonts:build');
  });
  watch([path.watch.img], function () {
    gulp.start('img:build');
  });
  watch([path.watch.js], function () {
    gulp.start('js:build');
  });
});

gulp.task('webserver', function () {
  browserSync(config);
});

gulp.task('webserverTunnel', function () {
  browserSync(configTunnel);
});

gulp.task('clean', function (cb) {
  rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);
