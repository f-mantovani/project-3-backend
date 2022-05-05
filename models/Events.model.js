const { Schema, model } = require('mongoose')

const eventSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    local: {
        type: String
    },
    details: {
        type: String
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