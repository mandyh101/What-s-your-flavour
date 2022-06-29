const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
}

function getWidgets(db = connection) {
  return db('widgets').select()
}

//1. update file name
//2. Write  getAllFlavours function
//3. Write a function to get all flavours that match an id
//4. Write a function to get all flavours that match an id and select a random one (this one might go inside the routes function?)