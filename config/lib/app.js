import express from 'express'
import config from '../env/default'

export function start() {
  const app = express()

  app.use(express.static('public/assets'))

  app.listen(config.port, function() {
    console.log('Listening on port:', this.address().port)
  })
}