const fs = require('fs')
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { upload, imageGallery } = require('./middleware/upload')
const Submit = require('./models/submit')
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

const indexValues =  {
    title: 'Pared',
    description: 'Próximamente, pared.',
    name: 'Migala.mx',
    link: 'https://migala.mx',
}

const aboutValues =  {
    title: 'About',
    name: 'Migala.mx',
    link: 'https://migala.mx',
}

const submitValues =  {
    title: 'Submit',
    description: fs.readFileSync('./templates/submit.txt').toString('utf-8'),
    name: 'Migala.mx',
    link: 'https://migala.mx',
}

const errorValues = {
    title: '404 not found',
    description: 'The requested page does not exists',
    name: 'Migala.mx',
    link: 'https://migala.mx',
}

app.get('/', (req, res) => {
    res.render('index', indexValues)
})

app.get('/about', (req, res) => {
    res.render('about', aboutValues)
})

app.get('/about/*', (req, res) => {
    const newValues = { description: 'About page not found' }
    const aboutErrorValues = Object.assign({}, errorValues, newValues)

    res.render('404', aboutErrorValues)

    console.log('Requested', req._parsedOriginalUrl.pathname)
})

app.get('/submit', (req, res) => {
    res.render('submit', submitValues)
})

app.post('/submit', imageGallery, async (req, res) => {
    const params = {
        artist_name: req.body.artist_name,
        project_name: req.body.project_name,
        project_description: req.body.project_description,
        artist_city: req.body.artist_city,
        artist_age: req.body.artist_age,
        contact_email: req.body.contact_email,
        images_folder_url: req.body.images_folder_url,
    }
    const submit = new Submit(params)
    await submit.save()
    pageValues = {
        title: 'Submit',
        description: 'Recibimos tu solicitud correctamente. Pronto te contactaremos.',
        name: 'Migala.mx',
        link: 'https://migala.mx',
    }
    res.render('submit', pageValues)
}, (error, req, res, next) => {
    console.error(error)
    pageValues = {
        title: 'Submit',
        error: 'Hubo un error al recibir tu solicitud, por favor intenta de nuevo',
        name: 'Migala.mx',
        link: 'https://migala.mx',
    }
    res.render('submit', pageValues)
})

app.get('/submit/*', (req, res) => {
    const newValues = { description: 'Submit page not found' }
    const helpErrorValues = Object.assign({}, errorValues, newValues)

    res.render('404', helpErrorValues)
    console.log('Requested', req._parsedOriginalUrl.pathname)
})

app.get('*', (req, res) => {
    res.render('404', errorValues)
    console.log('Requested', req._parsedOriginalUrl.pathname)
})

app.listen(port, () => {
    console.log(`🐷 Server is up on port ${port}!`)
})
