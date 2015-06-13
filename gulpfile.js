'use strict';

var gulp            = require('gulp'),
    nodemon         = require('gulp-nodemon'),
    sass            = require('gulp-sass'),
    rename          = require('gulp-rename'),
    cssmin          = require('gulp-minify-css'),
    jshint          = require('gulp-jshint'),
    prefix          = require('gulp-autoprefixer'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    minifyHTML      = require('gulp-minify-html'),
    size            = require('gulp-size'),
    imagemin        = require('gulp-imagemin'),
    pngquant        = require('imagemin-pngquant'),
    plumber         = require('gulp-plumber'),
    notify          = require('gulp-notify'),
    webpack         = require('webpack');

gulp.task('scss', function() {
  var onError = function(err) {
    notify.onError({
        title:    'Gulp',
        subtitle: 'Failure!',
        message:  'Error: <%= error.message %>',
        sound:    'Beep'
    })(err);
    this.emit('end');
  };

  return gulp.src('scss/main.scss')
    .pipe(plumber({errorHandler: onError}))
    .pipe(sass())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(prefix())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('public/css'))
    .pipe(reload({stream:true}))
    .pipe(cssmin())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    files: ["public/**/*.*"],
    browser: "google chrome",
    port: 5000,
  });
});

gulp.task('nodemon', function () {
  return nodemon({
    script: 'app.js'
  }).on('start', function () {
      // cb();
  });
});

gulp.task('minify-html', function() {
    var opts = {
      comments:true,
      spare:true
    };

  gulp.src('./*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('public/'))
    .pipe(reload({stream:true}));
});

gulp.task('jshint', function() {
  gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['scss']);
  gulp.watch('js/*.js', ['jshint', 'webpack']);
  gulp.watch('./*.html', ['minify-html']);
  gulp.watch('img/*', ['imgmin']);
});

gulp.task('imgmin', function () {
  return gulp.src('img/*')
      .pipe(imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()]
      }))
      .pipe(gulp.dest('public/img'));
});

// webpack build:
gulp.task('webpack', function() {
  webpack({
    entry: './js/main.js',
    output: {
      path: __dirname + '/public/js',
      filename: 'j.js'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      })
    ]
  }, function(err) {
      if(err) {
        console.log(err);
      }
      reload({stream:true});
  });
});

gulp.task('build', ['webpack', 'imgmin', 'minify-html', 'scss']);

gulp.task('default', ['browser-sync', 'webpack', 'imgmin', 'minify-html', 'scss', 'watch']);
