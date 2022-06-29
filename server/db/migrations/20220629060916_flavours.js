exports.up = (knex) => {
  return knex.schema.createTable('flavours', (table) => {
    table.increments('id').primary()
    table.text('flavour_combo')
    table.integer('food_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('flavours')
}
