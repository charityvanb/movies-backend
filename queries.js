const db = require("./database-connection");

module.exports = {
    readAllMovies(){
        return db.select().from('movie')
    },
    readMovieById(id) {
        return db('movie').where('id', id).first()
    }
}