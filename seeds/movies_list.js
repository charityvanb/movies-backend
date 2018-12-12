
exports.seed = function(knex, Promise) {
  return knex('movie').del()
    .then(function () {
      return knex('movie').insert([
        {
          "director": "Jean-Pierre Jeunet",
          "title": "The City of Lost Children",
          "year": "1995",
          "rating": "R"
        },
        {
          "director": "Hal Ashby",
          "title": "Harold and Maude",
          "year": "1971",
          "rating": "PG"
        },
        {
          "director": "Stanley Kubrick",
          "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
          "year": "1964",
          "rating": "PG"
        }
      ]);
    });
};
