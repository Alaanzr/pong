
exports.up = async knex => {
  await knex.schema.createTable('player', table => {
    table.increments()
    table.string('name')
    table.string('email')
    table.string('password')
    table.timestamps()
  })  
}

exports.down = async knex => {
  await knex.schema.dropTable('player')
}