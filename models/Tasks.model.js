const { Schema, model } = require('mongoose')

const taskSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "todo"
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref:'User'
    }
})

module.exports = model('Task', taskSchema)