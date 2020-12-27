const mongoose = require('mongoose')
const validator = require('validator')

const schema = {
    creator_name: {
        type: String,
        required: true,
        trim: true,
        updateAllowed: true,
    },
    text: {
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

const casapropiaRecordSchema = mongoose.Schema(schema, { timestamps: true })

const CasapropiaRecord = mongoose.model('CasapropiaRecord', casapropiaRecordSchema)

module.exports = CasapropiaRecord
