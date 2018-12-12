
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', (movie) =>{
      movie.increments('id')
      movie.string('director')
      movie.string('title')
      movie.integer('year')
      movie.string('rating')
  })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('movie')
}
