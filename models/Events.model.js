const { Schema, model } = require('mongoose')

const eventSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    is_past: {
        type: Boolean,
    }
})

module.exports = model('Event', eventSchema)