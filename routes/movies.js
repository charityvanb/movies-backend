const express = require('express')
const router = express.Router()
const queries = require('../queries.js')

router.get('/', (req,res) => {
    queries.readAllMovies().then(movies => res.status(200).send({ movies }))
})

// router.get('/;', (req,res) => {
//     var id = req.params.id
//     var filtered = data.filter(obj => {
//         return obj.id == id
//     })
//     res.send({data : filtered})
// })

//router.put
module.exports = router