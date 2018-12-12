const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const moviesRoutes = require("./routes/movies")
const port = process.env.PORT || 3004



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/movies', moviesRoutes)


app.listen(port, () => {
    console.log(`running on port: ${port}`)
})