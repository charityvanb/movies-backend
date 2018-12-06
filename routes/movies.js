var express = require('express')
var router = express.Router()

router.get('/', (req,res) => {
    releaseEvents.status(200).send('you got the thing')
})

module.exports = router