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
