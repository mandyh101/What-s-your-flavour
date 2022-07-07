const express = require('express')
const request = require('superagent')
require('dotenv').config()

const apiKey = process.env.API_KEY
const apiId = process.env.API_ID
// console.log(process.env)

const router = express.Router()

//GET '/api/v1/disney/characters
router.get('/', (req, res) => {
  try {
    return request
      .get(
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

module.exports = router
