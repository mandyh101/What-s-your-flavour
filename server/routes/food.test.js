const request = 'supertest'
const server = require('./server')

describe('GET /api/v1/food', () => {
  test('gets an array of all the food data', () => {
    expect.assertions(0)
    request(server)
      .get('/api/v1/food')
      .then((res) => {
        console.log(res.text)
      })
  })
  test.todo('returns status 200 error if db function breaks')
})
