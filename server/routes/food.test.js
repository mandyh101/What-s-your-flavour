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

// describe('GET /api/v1/widgets', () => {
//   it('responds with widgets array on getWidgets success', () => {
//     getWidgets.mockImplementation(() =>
//       Promise.resolve([
//         { id: 1, name: 'test 1', price: 1.23, mfg: 'Test 1 Inc.', inStock: 4 },
//         { id: 2, name: 'test 2', price: 45.67, mfg: 'Test 2 Inc.', inStock: 0 },
//         {
//           id: 3,
//           name: 'test 3',
//           price: 890.12,
//           mfg: 'Test 3 Inc.',
//           inStock: 8,
//         },
//       ])
//     )
//     return request(server)
//       .get('/api/v1/widgets')
//       .expect(200)
//       .then((res) => {
//         expect(res.body).toHaveLength(3)
//         expect(res.body[1].price).toBe(45.67)
//       })
//   })
//   it('responds with 500 and error on getWidgets rejection', () => {
//     getWidgets.mockImplementation(() =>
//       Promise.reject(new Error('mock DB error'))
//     )
//     return request(server)
//       .get('/api/v1/widgets')
//       .expect(500)
//       .then((err) => {
//         expect(err.text).toBe('mock DB error')
//       })
//   })
// })

// const fakeFoodData = [
//   {
//     id: 101,
//     name: 'Beef',
//     image: ' ',
//   },
//   {
//     id: 102,
//     name: 'Poultry',
//     image: '',
//   },
//   {
//     id: 103,
//     name: 'Fish',
//     image: '',
//   },
//   {
//     id: 104,
//     name: 'Green vegetables',
//     image: '',
//   },
//   {
//     id: 105,
//     name: 'Yellow and Orange vegetables',
//     image: '',
//   },
//   {
//     id: 106,
//     name: 'eggs',
//     image: '',
//   },
//   {
//     id: 107,
//     name: 'Beans, rice and grain',
//     image: '',
//   },
// ]
