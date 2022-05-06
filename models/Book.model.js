const { Schema, model } = require('mongoose')

const bookSchema = new Schema(
  {
    name: {
      type: String
    },
    author: {
      type: String
    },
    year: {
      type: String
    },
    sinopsis: {
      type: String
    },
    imageUrl: {
      type: String
    },
    // Add this ID to control book entry creator
    createdByUser: {
      type: Schema.Types.ObjectId, 
      ref:'User'
    },
    // Changed this name, but we could use another name
    favoritedByUsers: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {timestamps: true}
)

module.exports = model('Book', bookSchema)