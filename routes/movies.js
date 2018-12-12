const express = require('express')
const router = express.Router()
const queries = require('../queries.js')

router.get('/', (req,res) => {
    // res.send("what!")
    queries.readAllMovies().then(movies => res.status(200).send({ movies }))
})

module.exports = router