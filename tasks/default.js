import gulp from 'gulp'
import runSequence from 'run-sequence'

gulp.task('build', function(done) {
  process.env.NODE_ENV = 'development'
  runSequence('delete', 'images', 'svg', ['styles', 'scripts', 'views'], ['browser-sync', 'watch'], done)
})

gulp.task('default', function(done) {
  process.env.NODE_ENV = 'development'
  runSequence(['browser-sync', 'watch'], done)
})