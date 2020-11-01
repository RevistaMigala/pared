const fs = require('fs')
const path = require('path')
const express = require('express')
const { upload, imageGallery } = require('../middleware/upload')
const validateLang = require('../middleware/validateLang')
const Submit = require('../models/submit')
const Message = require('../models/message')
const { TwitterClient } = require('../utils/twitter_client')
const { sanitizeMessage } = require('../utils/sanitizer')
require('../../db/mongoose')

const router = new express.Router()

const copies = require('../copies')

router.get('/', (req, res) => {
    res.render('index', copies.indexValues(req.query.lang))
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
        res.sendStatus(200)
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

router.post('/submit', imageGallery, async (req, res) => {
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

router.get('/expos/linavelasquez', validateLang, async (req, res) => {
    res.render('linaVelasquez', copies.linaVelasquezValues(req.query.lang))
})

router.get('*', (req, res) => {
    res.render('404', copies.errorValues)
    console.log('Requested', req._parsedOriginalUrl.pathname)
})

module.exports = router
