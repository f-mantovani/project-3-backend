const { Schema, model } = require('mongoose')

const bookSchema = new Schema(
  {
    name: {
      type: String
    },
    author: {
      type: String
    },
    userId: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  }
)

module.exports = model('Book', bookSchema)