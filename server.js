if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

// Middleware Plugins
server.use(bodyParser.json())

// Routes
server.use('/', [
  require('./routes/email')
])

// Start the server
server.listen(7000, error => {
  if (error) console.error('Error starting', error)
  else console.log('Started at http://localhost:7000')
})
