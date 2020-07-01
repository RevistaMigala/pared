const mongoose = require('mongoose')
const validator = require('validator')

const schema = {
    username: {
        type: String,
        required: true,
        trim: true,
        updateAllowed: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
        updateAllowed: true,
    },
}

const messageSchema = mongoose.Schema(schema, { timestamps: true })

const Message = mongoose.model('Message', messageSchema)

module.exports = Message
