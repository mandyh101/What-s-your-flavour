exports.seed = (knex) => {
  return knex('food')
    .del()
    .then(() => {
      return knex('food').insert([
        {
          id: 101,
          name: 'Beef',
          image: ' ',
        },
        {
          id: 102,
          name: 'Poultry',
          image: '',
        },
        {
          id: 103,
          name: 'Fish',
          image: '',
        },
        {
          id: 104,
          name: 'Green vegetables',
          image: '',
        },
        {
          id: 105,
          name: 'Yellow and Orange vegetables',
          image: '',
        },
        {
          id: 106,
          name: 'eggs',
          image: '',
        },
        {
          id: 107,
          name: 'Beans, rice and grain',
          image: '',
        },
      ])
    })
}
