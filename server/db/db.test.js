const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./db')

//1. rewatch lecture on testing db functions
//2. update file name
//3. rewrite files

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getWidgets', () => {
  it('returns the correct widgets array', () => {
    return db.getWidgets(testDb).then((widgets) => {
      expect(widgets).toHaveLength(3)
      expect(widgets[0]).toHaveProperty('mfg')
      expect(widgets[1].inStock).toBe(8)
    })
  })
})
