const fs = require('fs')
const path = require('path')
const express = require('express')
const Auth = require('../middleware/auth')
const { upload, imageGallery } = require('../middleware/upload')
const validateLang = require('../middleware/validateLang')
const Submit = require('../models/submit')
const Message = require('../models/message')
const CasapropiaRecord = require('../models/casapropiarecord')
const { TwitterClient } = require('../utils/twitter_client')
const FtpClient = require('../utils/ftp_client')
const { sanitizeMessage, sanitizeWebSafe } = require('../utils/sanitizer')
const { bufferToStream } = require('../utils/streams')
require('../../db/mongoose')

const router = new express.Router()

const copies = require('../copies')

router.get('/', async (req, res) => {
    const images = [
        {
            author: 'Gabriel Carrillo de Icaza',
            url: 'http://migala.mx/recursos/pared/gabrielCarrillo/1.jpeg',
            thumb: 'http://migala.mx/recursos/pared/gabrielCarrillo/1thumb.jpg',
        },
        {
            author: 'Gabriel Carrillo de Icaza',
            url: 'http://migala.mx/recursos/pared/gabrielCarrillo/2.jpeg',
            thumb: 'http://migala.mx/recursos/pared/gabrielCarrillo/2thumb.jpg',
        },
        {
            author: 'Gabriel Carrillo de Icaza',
            url: 'http://migala.mx/recursos/pared/gabrielCarrillo/3.jpeg',
            thumb: 'http://migala.mx/recursos/pared/gabrielCarrillo/3thumb.jpg',
        },
        {
            author: 'Gabriel Carrillo de Icaza',
            url: 'http://migala.mx/recursos/pared/gabrielCarrillo/4.jpeg',
            thumb: 'http://migala.mx/recursos/pared/gabrielCarrillo/4thumb.jpg',
        },
        {
            author: 'Gabriel Carrillo de Icaza',
            url: 'http://migala.mx/recursos/pared/gabrielCarrillo/5.jpeg',
            thumb: 'http://migala.mx/recursos/pared/gabrielCarrillo/5thumb.jpg',
        },
        {
            author: 'Gabriel Carrillo de Icaza',
            url: 'http://migala.mx/recursos/pared/gabrielCarrillo/6.jpeg',
            thumb: 'http://migala.mx/recursos/pared/gabrielCarrillo/6thumb.jpg',
        },
        {
            author: 'Gabriel Carrillo de Icaza',
            url: 'http://migala.mx/recursos/pared/gabrielCarrillo/7.jpeg',
            thumb: 'http://migala.mx/recursos/pared/gabrielCarrillo/7thumb.jpg',
        },
    ]
    const values = { images, ...copies.gabrielCarrilloValues(req.query.lang) }
    res.render('gabrielcarrillo', values)
})

router.post('/message', async (req, res) => {
    console.log('body', req.body)
    try {
        const messageBody = sanitizeMessage(req.body)

        if (!messageBody) {
            console.log('Malicious message detected')
            res.sendStatus(200)
        }
        const message = new Message(messageBody)
        await message.save()

        res.sendStatus(201)
    } catch(error) {
        console.error(error)

        res.sendStatus(500)
    }
})

router.get('/message', async (req, res) => {
    try {
        const messages = await Message.find({ expo: req.query.expo })

        res.status(200)
        res.send(messages)
    } catch(error) {
        console.error(error)

        res.sendStatus(500)
    }
})

router.get('/about', (req, res) => {
    res.render('about', copies.aboutValues(req.query.lang))
})

router.get('/about/*', (req, res) => {
    const newValues = { description: 'About page not found' }
    const aboutErrorValues = Object.assign({}, copies.errorValues, newValues)

    res.render('404', aboutErrorValues)

    console.log('Requested', req._parsedOriginalUrl.pathname)
})

router.get('/submit', (req, res) => {
    res.render('submit', copies.submitValues(req.query.lang))
})

router.post('/submit', async (req, res) => {
    try {
        const submit = new Submit(req.body)
        await submit.save()

        res.render('submit', copies.submitValuesSuccess(req.query.lang))
    } catch(error) {
        console.error(error)

        res.render('submit', copies.submitValuesError(req.query.lang))
    }
})

router.get('/submit/*', (req, res) => {
    const newValues = { description: 'Submit page not found' }
    const helpErrorValues = Object.assign({}, copies.errorValues, newValues)

    res.render('404', helpErrorValues)
    console.log('Requested', req._parsedOriginalUrl.pathname)
})

router.get('/exercise-1', validateLang, async (req, res) => {
    const twitter = new TwitterClient()

    try {
        const twits = await twitter.getTwits(req.query.lang)
        const poems = twits.statuses.map((status) => status.full_text.replace(/\n/g, '/ '))
        res.render('exercise-1', copies.exercise1Values(req.query.lang, poems))
    } catch (error) {
        console.error(error)
        res.render('index', copies.indexValues('es'))
    }
})

router.get('/casapropia', Auth.authorizer(), validateLang, async (req, res) => {
    const images = await CasapropiaRecord.find()
    const values = {
        ...copies.casapropiaValues(req.query.lang),
        images,
    }
    res.render('casapropia', values)
})

router.get('/services/casapropia', validateLang, async (req, res) => {
    try {
        const images = await CasapropiaRecord.find()

        res.status(200)
        res.send(images)
    } catch(error) {
        console.error(error)

        res.sendStatus(500)
    }
})

router.post('/services/casapropia', upload.single('image'), async (req, res) => {
    try {
        const ftp = new FtpClient()
        const imageFile = bufferToStream(req.file.buffer)
        const imageName = sanitizeWebSafe(req.file.originalname)
        const payload = {
            ...req.body,
            image_url: `${process.env.CASAPROPIA_HTTP_URL}/${imageName}`,
        }
        const record = new CasapropiaRecord(payload)
        await record.save()
        await ftp.uploadFile(imageFile, imageName)

        res.redirect('/casapropia')
    } catch(error) {
        console.error(error)

        res.render('casapropia', copies.casapropiaValuesError(req.query.lang))
    }
})

router.get('/services/lina', validateLang, async (req, res) => {
    const twitter = new TwitterClient()

    try {
        const twits = await twitter.getGrandmaTuits(req.query.lang)
        const [tuit] = twits.statuses.map((status) => status.full_text.replace(/\n/g, '/ '))
        res.status(200)
        res.send(JSON.stringify(tuit))
    } catch (error) {
        res.status(500)
        res.send()
    }
})

router.get('/expos', validateLang, async (req, res) => {
    res.render('expos', copies.exposValues(req.query.lang))
})

router.get('/expos/sergiosuarez', validateLang, async (req, res) => {
    res.render('sergioSuarez', copies.sergioSuarezValues(req.query.lang))
})

router.get('/expos/adriangonzalez', validateLang, async (req, res) => {
    res.render('adrianGonzalez', copies.adrianGonzalezValues(req.query.lang))
})

router.get('/expos/alejandraaguilar', validateLang, async (req, res) => {
    res.render('alejandraAguilar', copies.alejandraAguilarValues(req.query.lang))
})

router.get('/expos/aliciaayanegui', validateLang, async (req, res) => {
    res.render('aliciaAyanegui', copies.aliciaAyaneguiValues(req.query.lang))
})

router.get('/expos/linavelasquez', validateLang, async (req, res) => {
    res.render('linaVelasquez', copies.linaVelasquezValues(req.query.lang))
})

router.get('/expos/circeirasema', validateLang, async (req, res) => {
    res.render('circeIrasema', copies.circeIrasemaValues(req.query.lang))
})

router.get('/expos/manuelagromo', validateLang, async (req, res) => {
    const texts = await CasapropiaRecord.find()
    const values = {
        texts: texts.reverse(),
        ...copies.manuelaGRomoValues(req.query.lang),
    }
    res.render('manuelaGRomo', values)
})

router.get('/expos/heliosantos', validateLang, async (req, res) => {
    const { generateTitle } = require('../utils/helio_utils')
    const values = {
        ...generateTitle(),
        ...copies.helioSantosValues(req.query.lang),
    }

    res.render('heliosantos', values)
})

router.get('/expos/gabrielcarrillo', validateLang, async (req, res) => {
    const images = [
        {
            author: 'Gabriel Carrillo de Icaza',
            url: 'http://migala.mx/recursos/pared/gabrielCarrillo/1.jpeg',
        },
        {
            author: 'Gabriel Carrillo de Icaza',
            url: 'http://migala.mx/recursos/pared/gabrielCarrillo/2.jpeg',
        },
        {
            author: 'Gabriel Carrillo de Icaza',
            url: 'http://migala.mx/recursos/pared/gabrielCarrillo/3.jpeg',
        },
        {
            author: 'Gabriel Carrillo de Icaza',
            url: 'http://migala.mx/recursos/pared/gabrielCarrillo/4.jpeg',
        },
        {
            author: 'Gabriel Carrillo de Icaza',
            url: 'http://migala.mx/recursos/pared/gabrielCarrillo/5.jpeg',
        },
        {
            author: 'Gabriel Carrillo de Icaza',
            url: 'http://migala.mx/recursos/pared/gabrielCarrillo/6.jpeg',
        },
        {
            author: 'Gabriel Carrillo de Icaza',
            url: 'http://migala.mx/recursos/pared/gabrielCarrillo/7.jpeg',
        },
    ]
    const values = { images, ...copies.gabrielCarrilloValues(req.query.lang) }
    res.render('gabrielcarrillo', values)
})

router.get('*', (req, res) => {
    res.render('404', copies.errorValues)
    console.log('Requested', req._parsedOriginalUrl.pathname)
})

module.exports = router
