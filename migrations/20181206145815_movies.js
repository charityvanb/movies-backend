
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', (movie) =>{
      movie.increment('id')
      movie.string('director')
      movie.string('title')
      movie.integer('year')
      movie.rating('string')

  })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('movies')
}
