import request from 'supertest'
const server = require('../server')
const db = require('../db/db')
jest.mock('../db/db')

describe('GET /api/v1/food', () => {
  test('gets an array of all the food data', () => {
    db.getAllFood.mockImplementation(() =>
      Promise.resolve([
        { id: 1, name: 'testFood1', image: ' ' },
        { id: 2, name: 'testFood2', image: ' ' },
        { id: 3, name: 'testFood3', image: ' ' },
        { id: 4, name: 'testFood4', image: ' ' },
        { id: 5, name: 'testFood5', image: ' ' },
        { id: 6, name: 'testFood6', image: ' ' },
        { id: 7, name: 'testFood7', image: ' ' },
      ])
    )
    return request(server)
      .get('/api/v1/food')
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveLength(7)
        expect(res.body[0].name).toBe('testFood1')
      })
  })
  test('returns status 500 error if db query fails', () => {
    db.getAllFood.mockImplementation(() => {
      return Promise.reject(new Error('blew up'))
    })
    expect.assertions(2)
    return request(server)
      .get('/api/v1/food')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong!')
      })
  })
})
