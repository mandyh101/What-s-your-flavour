const express = require('express')
const router = express.Router()
const db = require('../db/db')

//get all food data
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

//get flavour combos according to food id
router.get('/:foodId', (req, res) => {
  db.getAllFlavoursByFood(req.params.foodId)
    .then((flavours) => {
      res.json(flavours)
    })
    .catch((err) => {
      res.status(500).send('Something went wrong!')
      console.error(err)
    })
})


module.exports = router
