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

// function getAllFlavourCombos(db = connection){
//   return db('flavours').select()
// }

function getAllFlavoursByFood(foodId, db = connection) {
  console.log(foodId)
  return db('flavours')
    .join('food', 'food.id', 'flavours.food_id')
    .select('food.name', 'food.id', 'flavours.id as flavourId', 'flavour_combo')
    .where('food.id', foodId)
}

//2. Write getAllFood function
//3. Wite a function that gets all flavours that match a food by id/food_id
//4. write a function that gets a flavour combo by ids?
//3. Write a function to get all flavours that match an id
//4. Write a function to get all flavours that match an id and select a random one (this one might go inside the routes function?)
