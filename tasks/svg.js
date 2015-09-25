import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import config from '../config/assets/default'
const $ = plugins()

gulp.task('svg', function() {
  return gulp.src(config.client.svg)
    .pipe($.rename(function(file) {
      const folderName = file.dirname.split('/')
      file.basename = `${folderName[0]}-${file.basename}`
      file.dirname = '.'
    }))
    .pipe($.svgmin())
    .pipe($.svgstore({
      inlineSvg: true
    }))
    .pipe($.cheerio(function($) {
      $('svg').attr('style', 'display:none')
    }))
    .pipe($.rename(function(file) {
      file.basename = 'main'
    }))
    .pipe(gulp.dest('public/assets/icons'))
})