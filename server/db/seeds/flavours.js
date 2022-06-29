exports.seed = (knex) => {
  return knex('flavours')
    .del()
    .then(() => {
      return knex('flavours').insert([
        {
          id: 201,
          flavour_combo: 'lemon juice, rosemary, black pepper',
          food_id: 101,
        },
        {
          id: 202,
          flavour_combo: 'thyme, cloves, orange peel, black pepper',
          food_id: 101,
        },
        {
          id: 203,
          flavour_combo: 'garlic, herbed vinegar, black pepper',
          food_id: 101,
        },
        {
          id: 204,
          flavour_combo: 'mashed green peppercorns, onions, marjoram',
          food_id: 101,
        },
        {
          id: 205,
          flavour_combo: 'ginger, orange peel, sage',
          food_id: 102,
        },
        {
          id: 206,
          flavour_combo: 'marjoram, thyme, apple cider vinegar',
          food_id: 102,
        },
        {
          id: 207,
          flavour_combo: 'tarragon, shallots, lemon juice',
          food_id: 102,
        },
        {
          id: 208,
          flavour_combo: 'basil, white wine vinegar, garlic',
          food_id: 102,
        },
        {
          id: 209,
          flavour_combo: 'dill, lemon juice, mustard seeds',
          food_id: 103,
        },
        {
          id: 210,
          flavour_combo: 'celery seeds, lemon juice, black pepper',
          food_id: 103,
        },
        {
          id: 211,
          flavour_combo: 'fennel seeds, mustard seeds, bay, lemon peel',
          food_id: 104,
        },
        {
          id: 212,
          flavour_combo: 'thyme, chives, onions',
          food_id: 104,
        },
        {
          id: 213,
          flavour_combo: 'basil, nutmeg, marjoram',
          food_id: 104,
        },
        {
          id: 214,
          flavour_combo: 'cinnamon, nutmeg, orange juice, thyme',
          food_id: 105,
        },
        {
          id: 215,
          flavour_combo: 'ginger, cinnamon, apple cider vinegar, celery leaf',
          food_id: 105,
        },
        {
          id: 216,
          flavour_combo: 'basil, parsley, oregano',
          food_id: 105,
        },
        {
          id: 217,
          flavour_combo: 'dill, chives, parsley, paprika',
          food_id: 106,
        },
        {
          id: 218,
          flavour_combo: 'nutmeg, dry mustard, black pepper',
          food_id: 106,
        },
        {
          id: 219,
          flavour_combo: 'oregano, garlic, thyme',
          food_id: 106,
        },
        {
          id: 220,
          flavour_combo: 'chilies, cumin seeds, oregano, garlic',
          food_id: 107,
        },
        {
          id: 221,
          flavour_combo: 'saffron, garlic, parsley',
          food_id: 107,
        },
        {
          id: 222,
          flavour_combo: 'saffron, garlic, parsley',
          food_id: 107,
        },
      ])
    })
}
