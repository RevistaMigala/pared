const mongoose = require('mongoose')
const validator = require('validator')

const schema = {
    creator_name: {
        type: String,
        required: true,
        trim: true,
        updateAllowed: true,
    },
    serie_name: {
        type: String,
        required: true,
        trim: true,
        updateAllowed: true,
    },
    thumb_url: {
        type: String,
        required: true,
        trim: true,
        updateAllowed: true,
    },
    image_url: {
        type: String,
        required: true,
        trim: true,
        updateAllowed: true,
    },
}

const imageSchema = mongoose.Schema(schema, { timestamps: true })

const Image = mongoose.model('Image', imageSchema)

module.exports = Image
