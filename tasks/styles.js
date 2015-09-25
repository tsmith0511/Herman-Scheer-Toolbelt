import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import config from '../config/assets/default'
import browserSync from 'browser-sync'
import path from 'path'

const $ = plugins()

gulp.task('styles', function() {
  return gulp.src(config.client.sass)
    //if config/assets/default.js is not false (so true) include sourcemaps, if not (so false) skip it
    .pipe(!config.minify ? $.sourcemaps.init() : $.util.noop())
    .pipe($.sass({
      indentedSyntax: true,
      includePaths: require('node-bourbon').with(config.client.lib.sass),
      errLogToConsole: false,
      onError: function(err) {
        return $.notify().write(err)
      }
    }))
    .pipe($.autoprefixer())
    .pipe($.rename(function(file) {
      // Places core at the top of the css chain.
      if (file.basename === 'core')
        file.dirname = 'core/client/sass'
      file.dirname = file.dirname.replace(path.sep + 'sass', path.sep + 'css');
    }))
    .pipe(gulp.dest('./modules/'))
    .pipe($.concat('main.css'))
    .pipe(config.minify ? $.minifyCss() : $.util.noop())
    .pipe(!config.minify ? $.sourcemaps.write() : $.util.noop())
    .pipe(gulp.dest('public/assets/stylesheets'))
    .pipe(browserSync.reload({
      stream: true
    }))
})
