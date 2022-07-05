const path = require('path')
const express = require('express')

const food = require('./routes/food') //route file for food
const recipes = require('./routes/recipes') //route file for recipes

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/food', food) //internal api
server.use('/api/v2/recipes', recipes)

module.exports = server
