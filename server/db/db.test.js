const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

// const db = require('./db') //import db file
import db from './db'

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getAllFood', () => {
  test('returns an array of food data', () => {
    expect.assertions(3)
    return db.getAllFood(testDb).then((result) => {
      expect(result).toHaveLength(7)
      expect(result[0]).toHaveProperty('name')
      expect(result[1].id).toBe(102)
    })
  })
})

describe('getAllFlavoursByFood', () => {
  test('returns an array of flavours that match a selected food', () => {
    expect.assertions(2)
    const foodId = 107
    return db.getAllFlavoursByFood(foodId, testDb).then((flavours) => {
      expect(flavours).toHaveLength(3)
      expect(flavours[2]).toHaveProperty('flavour_combo')
    })
  })
})
