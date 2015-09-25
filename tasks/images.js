import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import config from '../config/assets/default'
import browserSync from 'browser-sync'

const reload = browserSync.reload
const $ = plugins()

gulp.task('images', function() {
  return gulp.src(config.client.images)
    .pipe($.newer('./public/assets/images'))
    .pipe($.rename(function(file) {
      const folderName = file.dirname.split('/')
      file.basename = `${folderName[0]}-${file.basename}`
      file.dirname = '.'
    }))
    .pipe($.imagemin())
    .pipe(gulp.dest('./public/assets/images'))
})

gulp.task('images-watch', ['images'], reload)