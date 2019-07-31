const express = require('express')
const bodyParser = require('body-parser')
const teamRouter = require('./team/router')
const playerRouter = require('./player/router')
const cityRouter = require('./city/router')

const jsonParser = bodyParser.json()
const app = express()
const port = 4000

app.use(jsonParser)
app.use(teamRouter)
app.use(playerRouter)
app.use(cityRouter)
app.listen(port, () => console.log(`Listening on :${port}`))