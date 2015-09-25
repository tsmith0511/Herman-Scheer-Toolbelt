import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import config from '../config/assets/default'
import _ from 'lodash'
import browserSync from 'browser-sync'
import babelify from 'babelify'

const $ = plugins()
const reload = browserSync.reload

gulp.task('jshint', function() {
  return gulp.src(_.union(config.server.allJS,
      config.client.js))
    .pipe($.newer('public/assets/javascripts'))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .on('error', $.notify.onError())
})

gulp.task('scripts-modernizr', ['jshint'], function() {
  return browserify(config.client.lib.modernizr, {
      debug: !config.minify
    })
    .bundle()
    .on('error', $.notify.onError())
    .pipe(source('modernizr.js'))
    .pipe(config.minify ? $.buffer() : $.util.noop())
    .pipe(config.minify ? $.uglify() : $.util.noop())
    .pipe(gulp.dest('public/assets/javascripts'))
})


gulp.task('scripts-main', ['jshint'], function() {
  return browserify(config.client.jsCore, {
      debug: !config.minify
    })
    .transform(babelify)
    .bundle()
    .on('error', $.notify.onError())
    .pipe(source('main.js'))
    .pipe($.ngAnnotate())
    .pipe(config.minify ? $.buffer() : $.util.noop())
    .pipe(config.minify ? $.uglify() : $.util.noop())
    .pipe(gulp.dest('public/assets/javascripts'))
})

gulp.task('scripts-vendor', function() {
  return browserify(config.client.lib.js)
    .bundle()
    .on('error', $.notify.onError())
    .pipe(source('vendor.js'))
    .pipe(config.minify ? $.buffer() : $.util.noop())
    .pipe(config.minify ? $.uglify() : $.util.noop())
    .pipe(gulp.dest('public/assets/javascripts'))
})

gulp.task('scripts', ['scripts-vendor', 'scripts-main', 'scripts-modernizr'])
gulp.task('scripts-watch-main', ['scripts-main'], reload)
gulp.task('scripts-watch-vendor', ['scripts-vendor'], reload)
gulp.task('scripts-watch-modernizr', ['scripts-modernizr'], reload)