'use strict'

const express = require('express')
const pino = require('express-pino-logger')
const bodyParser = require('body-parser')
const boom = require('express-boom')
const errorHandler = require('./middlewares/error-handler')
require('./core/mongo').connect()

const port = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json())
app.use(pino())
app.use(boom())
require('./resources/projects')(app)
app.use(errorHandler())

app.listen(port, () => {
  if (process.env.NODE_ENV === 'test') return
  console.log('Express app started on port ' + port)
})

module.exports = {
  app
}
