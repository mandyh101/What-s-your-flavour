exports.up = (knex) => {
  return knex.schema.createTable('food', (table) => {
    table.integer('id').primary()
    table.string('name')
    table.string('image')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('food')
}
