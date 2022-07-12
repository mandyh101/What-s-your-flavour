// eslint-disable-next-line no-unused-vars
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const foodUrl = '/api/v1/food/'
const recipeURL = '/api/v2/recipes'

export function getFoodData() {
  return request
    .get(foodUrl)
    .then((response) => {
      const foodData = response.body
      return foodData
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getAllFlavourCombos(foodId) {
  return request
    .get(foodUrl + foodId)
    .then((response) => {
      const flavoursByFood = response.body
      return flavoursByFood
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getRecipes() {
  return request
    .get(recipeURL)
    .then((response) => response.body.hits)
    .catch((err) => {
      console.log(err)
    })
}

//TODO function that fetches recipes from external API
export function fetchRecipesWithIngredients(food) {
  return request
    .post(recipeURL)
    .send({ food })
    .then((response) => response.body)
    .catch((err) => {
      console.log(err)
    })
}
