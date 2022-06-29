const path = require('path')
const express = require('express')

const widgets = require('./routes/widgets') //change to ./routes/flavours

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/widgets', widgets) //change to /api/v1/flavours, flavours

module.exports = server
