const path = require('path')
const express = require('express')

const food = require('./routes/food') 

//external API function
const recipes = require('./routes/recipes')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/food', food) //internal api
server.use('/api/v2/recipes', recipes) //external API recipes - might not need this

module.exports = server
