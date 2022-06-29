const path = require('path')
const express = require('express')

const flavours = require('./routes/flavours') //root

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/flavours', flavours) //internal api

module.exports = server
