import gulp from 'gulp'
import del from 'del'


gulp.task('delete', function() {
  del.sync(['public/', 'modules/*/client/css/', 'modules/*/client/html/'])
})