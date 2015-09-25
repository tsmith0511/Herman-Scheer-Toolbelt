export default {
  minify: false,
  client: {
    lib: {
      js: ['./modules/core/client/js/vendor.js'],
      modernizr: ['./modules/core/client/js/modernizr.js'],
      sass: [
        './node_modules/foundation-sites/scss'
      ],
      fonts: []
    },
    css: [
      './modules/*/client/css/*.css'
    ],
    sass: [
      './modules/core/client/{scss,sass}/core.{scss,sass}',
      './modules/*/client/{scss,sass}/*.{scss,sass}'
    ],
    js: [
      './modules/core/client/js/core.js',
      './modules/*/client/*.js',
      './modules/*/client/**/*.js',
      '!modules/core/client/js/vendor.js',
      '!modules/core/client/js/modernizr.js'
    ],
    jsCore: ['./modules/core/client/js/core.js'],
    views: [
      './modules/*/client/views/**/*.jade',
      '!modules/*/client/views/**/layout.jade'
    ],
    images: ['./modules/*/client/img/**/*.{png,jpg,gif,jpeg,ico}'],
    svg: ['./modules/*/client/svg/**/*.svg']
  },
  server: {
    allJS: ['gulpfile.js', 'server.js', 'config/**/*.js'],
    models: './modules/*/server/models/**/*.js',
    routes: ['./modules/*/server/routes/index.js'],
    views: './modules/*/server/views/**/*.jade'
  }
}