const path = require('path')
const express = require('express')

const food = require('./routes/food')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/food', food) //internal api

module.exports = server
