import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import config from '../config/assets/default'
import configEnv from '../config/env/default'
import browserSync from 'browser-sync'

const $ = plugins()

gulp.task('nodemon', function(cb) {
  var called = false
  return $.nodemon({
      script: 'server.js',
      watch: config.server.allJS
    })
    .on('start', function() {
      if (!called) {
        cb()
        called = true
      }
    })
    .on('restart', function() {
      setTimeout(function() {
        browserSync.reload({
          stream: false
        })
      }, 1000)
    })
})


gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: 'http://localhost:' + configEnv.port,
    browser: 'google chrome',
    port: 9000,
    ghostMode: false,
    open: false,
    notify: false
  })
})