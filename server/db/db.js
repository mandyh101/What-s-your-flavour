const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllFood,
  getAllFlavoursByFood,
}

function getAllFood(db = connection) {
  return db('food').select()
}

function getAllFlavoursByFood(id, db = connection) {
  return db('flavours').join('food', 'flavours.food_id', '=', 'food.id')
}

//1. update file name
//2. Write  getAllFood names or getAllFood function?
//3. Wite a function that gets all flavours that match a food by id/food_id
//4. write a function that gets a flavour combo by ids?
//3. Write a function to get all flavours that match an id
//4. Write a function to get all flavours that match an id and select a random one (this one might go inside the routes function?)
