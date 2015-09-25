import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import config from '../config/assets/default'
import browserSync from 'browser-sync'


gulp.task('watch', function() {

  // server
  gulp.watch(config.server.views).on('change', browserSync.reload)
  gulp.watch(config.server.allJS, ['jshint'])

  // client
  gulp.watch(config.client.js, ['scripts-watch-main'])
  gulp.watch(config.client.lib.js, ['scripts-watch-vendor'])
  gulp.watch(config.client.lib.modernizr, ['scripts-watch-modernizr'])
  gulp.watch(config.client.sass, ['styles'])
  gulp.watch(config.client.svg, ['svg'])
  gulp.watch(config.client.images, ['images-watch'])
  gulp.watch(config.client.views, ['views-watch'])

})