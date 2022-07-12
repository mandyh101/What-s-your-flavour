const express = require('express')
const request = require('superagent')
const router = express.Router()

require('dotenv').config()
const apiKey = process.env.API_KEY
const apiId = process.env.API_ID

//GET '/api/v2/recipes
router.get('/', (req, res) => {
  try {
    return request
      .get(
        //how do i insert the search query?!
        `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${apiId}&app_key=${apiKey}`
      )
      .then((response) => {
        console.log('recipe route hit')
        res.json(response.body)
      })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

//POST '/api/v2/recipes
router.post('/', (req, res) => {
  console.log('req.body', req.body)
  const query = req.body.food //HELP
  console.log('query', query)
  try {
    return request
      .get(
        //how do i insert the search query?!
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${apiId}&app_key=${apiKey}`
      )
      .then((response) => {
        console.log('recipe route hit')
        res.json(response.body.hits)
      })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
