const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
  },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  booksReading: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  booksToRead: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  booksDone: [{ type: Schema.Types.ObjectId, ref: 'Book' }],

})

module.exports = model('User', userSchema)
