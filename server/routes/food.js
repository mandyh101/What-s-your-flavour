const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
  db.getAllFood()
    .then((food) => {
      res.json(food)
    })
    .catch((err) => {
      res.status(500).send('Something went wrong!')
      console.error(err)
    })
})

module.exports = router
