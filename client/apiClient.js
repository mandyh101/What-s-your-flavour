// eslint-disable-next-line no-unused-vars
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const foodUrl = '/api/v1/food/'

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

export function getAllFlavourCombos(id) {
  return request
    .get(`foodUrl${id}`)
    .then((response) => {
      const flavoursByFood = response.body
      return flavoursByFood
    })
    .catch((err) => {
      console.log(err)
    })
}
