const path = require('path')
const express = require('express')
const hbs = require('hbs')
const router = require('./routers')

const app = express()
const port = process.env.PORT || 3000
const public = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../views/partials')

// Setup view engine
app.set('view engine', 'hbs')
// app.use(express.urlencoded())
hbs.registerPartials(partialsPath)
// Setup directory for static files
app.use(express.static(public))

app.use(router)

app.listen(port, () => {
    console.log(`🐷 Server is up on port ${port}!`)
})
