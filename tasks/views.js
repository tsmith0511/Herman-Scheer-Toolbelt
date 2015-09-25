import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import config from '../config/assets/default'
import browserSync from 'browser-sync'
import path from 'path'
const $ = plugins()


// For rendering to php just change $.jade -> $.jadePhp

gulp.task('views', function() {
  return gulp.src(config.client.views)
    // .pipe($.data(function(file) {
    //   var data = {}
    //   data.CDN = require('../config/cdn')
    //   return data
    // }))
    .pipe($.jadeGlobbing({
      placeholder: {
        'layout': "modules/core/client/views/layout.jade"
      }
    }))
    .pipe($.jade({
      pretty: true,
      force: true,
      locals: {
        title: 'Herman-Scheer Toolbelt'
      }
    }))
    .pipe($.rename(function(file) {
      if (file.dirname === 'core/client/views/components')
        file.dirname = 'core/client/views'
      file.dirname = file.dirname.replace(path.sep + 'views', path.sep + 'html')
    }))
    .pipe(gulp.dest('./modules'))
    .pipe($.rename(function(file) {
      file.dirname = '.'
    }))
    .pipe(gulp.dest('./public/assets'))
})

gulp.task('views-watch', ['views'], browserSync.reload)