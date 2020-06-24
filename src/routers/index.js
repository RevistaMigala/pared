const fs = require('fs')
const path = require('path')
const express = require('express')
const { upload, imageGallery } = require('../middleware/upload')
const validateLang = require('../middleware/validateLang')
const Submit = require('../models/submit')
const { TwitterClient } = require('../utils/twitter_client')
require('../../db/mongoose')

const router = new express.Router()

const copies = require('../copies')

router.get('/', (req, res) => {
    res.render('index', copies.indexValues(req.query.lang))
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

router.get('*', (req, res) => {
    res.render('404', copies.errorValues)
    console.log('Requested', req._parsedOriginalUrl.pathname)
})

module.exports = router
