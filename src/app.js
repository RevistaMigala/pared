const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000
const public = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../views/partials')

// Setup view engine
app.set('view engine', 'hbs')
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
    description: 'Próximamente podrás proponer tu trabajo para exhibirlo un mes en la pared.',
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
