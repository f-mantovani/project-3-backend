const { Router } = require('express')

const User = require('../models/User.model')
const Book = require('../models/Book.model')
const { createBookReqPayload } = require('../controllers/book_controllers/createBookReqPayload')
const { verifyUserId } = require('../controllers/helper_controllers/verifyUserId.js')

const router = Router()

//Create a Book
router.post('/', async (req, res) => {

  const { name, author, userId } = createBookReqPayload(req)

  try {
  
    const newBook = await Book.create({ name, author, userId, favoritedByUsers: userId })

    await User.findByIdAndUpdate(userId, { $push: { books: newBook._id }})

    res.status(201).json(newBook)

  } catch (error) {
    
    res.status(500).json({
      place: 'Error trying to create a new book',
      error: error.message,
    })
  }
})

// Get all Books
router.get('/', async (req, res) => {

  try {

    const allBooks = await Book.find()

    res.status(200).json(allBooks)

  } catch (error) {

    res.status(500).json({ 
      place: 'Error trying to get all books', 
      error: error.message 
    })
  }
})

// Get one BookById
router.get('/:bookId', async (req, res) => {

  const { bookId } = createBookReqPayload(req)

  try {

    const findBook = await Book.findById(bookId)

    res.status(200).json(findBook)

  } catch (error) {
    res.status(500).json({ 
      place: 'Error trying to get one book', 
      error: error.message 
    })
  }
})

// Delete one Book
router.delete('/delete/:bookId', async (req, res) => {

  const { userId, bookId } = createBookReqPayload(req)

  try {

    const deleted = await Book.findOneAndDelete({ _id: bookId, userId })

    verifyUserId(deleted, "You can't delete a book that you not created")

    await User.updateMany({ $pull: { books: bookId } })

    res.status(204).json()

  } catch (error) {
    res.status(error.status || 500).json({ 
      place: 'Error trying to delete one book', 
      error: error.message 
    })
  }
})

module.exports = router
