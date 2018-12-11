var express = require('express')
var router = express.Router()
const queries = require('../queries/moviequeries')

router.get('/', (req,res) => {
    res.status(200).send('you got the thing')
})

module.exports = router