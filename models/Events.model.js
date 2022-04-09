const { Schema, models } = require('mogoose')

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
    }
})

module.exports = models('Event', eventSchema)