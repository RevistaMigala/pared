const fs = require('fs')
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { upload, imageGallery } = require('./middleware/upload')
const Submit = require('./models/submit')
const { TwitterClient } = require('./utils/twitter_client')
require('../db/mongoose')

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

const indexValues = require('./copies/indexPage')
const aboutValues = require('./copies/aboutPage')
const submitValues = require('./copies/submitPage')
const submitValuesSuccess = require('./copies/submitPageSuccess')
const submitValuesError = require('./copies/submitPageError')
const exercise1Values = require('./copies/exercise1Page')


const errorValues = {
    title: '404 not found',
    description: 'The requested page does not exists',
    name: 'Migala.mx',
    link: 'https://migala.mx',
}

app.get('/', (req, res) => {
    res.render('index', indexValues(req.query.lang))
})

app.get('/about', (req, res) => {
    res.render('about', aboutValues(req.query.lang))
})

app.get('/about/*', (req, res) => {
    const newValues = { description: 'About page not found' }
    const aboutErrorValues = Object.assign({}, errorValues, newValues)

    res.render('404', aboutErrorValues)

    console.log('Requested', req._parsedOriginalUrl.pathname)
})

app.get('/submit', (req, res) => {
    res.render('submit', submitValues(req.query.lang))
})

app.post('/submit', imageGallery, async (req, res) => {
    try {
        const submit = new Submit(req.body)
        await submit.save()

        res.render('submit', submitValuesSuccess(req.query.lang))
    } catch(error) {
        console.error(error)

        res.render('submit', submitValuesError(req.query.lang))
    }
})

app.get('/submit/*', (req, res) => {
    const newValues = { description: 'Submit page not found' }
    const helpErrorValues = Object.assign({}, errorValues, newValues)

    res.render('404', helpErrorValues)
    console.log('Requested', req._parsedOriginalUrl.pathname)
})

app.get('/exercise-1', async (req, res) => {
    const twitter = new TwitterClient()

    try {
        const twits = await twitter.getTwits(req.query.lang)
        const poems = twits.statuses.map((status) => status.text.replace(/\n/g, '/ '))
        res.render('exercise-1', exercise1Values(req.query.lang, poems))
    } catch (error) {
        console.error(error)
    }
})

app.get('*', (req, res) => {
    res.render('404', errorValues)
    console.log('Requested', req._parsedOriginalUrl.pathname)
})

app.listen(port, () => {
    console.log(`🐷 Server is up on port ${port}!`)
})
