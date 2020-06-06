const mongoose = require('mongoose')
const validator = require('validator')

const schema = {
    artist_name: {
        type: String,
        required: true,
        trim: true,
        updateAllowed: true,
    },
    project_name: {
        type: String,
        required: true,
        trim: true,
        updateAllowed: true,
    },
    project_description: {
        type: String,
        required: true,
        trim: true,
        updateAllowed: true,
    },
    artist_age: {
        type: String,
        required: true,
        trim: true,
        updateAllowed: true,
    },
    artist_city: {
        type: String,
        required: true,
        trim: true,
        updateAllowed: true,
    },
    contact_email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        },
        updateAllowed: true,
    },
    images_folder_url: {
        type: String,
        required: true,
        trim: true,
        updateAllowed: true,
    },
}

const submitSchema = mongoose.Schema(schema, { timestamps: true })

const Submit = mongoose.model('Submit', submitSchema)

module.exports = Submit
