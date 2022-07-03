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
