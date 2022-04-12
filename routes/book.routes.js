const { Router } = require('express')

const User = require('../models/User.model')
const Book = require('../models/Book.model')
const { getInfo } = require('../helper/getInfo')

const router = Router()

//Create a Book
router.post('/',async (req, res) => {
  const {name, author, userId} = getInfo(req)

  try {

    const newBook = await Book.create({ name, author, userId })
  
    res.status(201).json(newBook)

  } catch (error) {

    res.status(500).json({ place: "Error trying to create a new book", error: error.message })
    
  }
})

// Get all Books
router.get('/', async (req, res) => {
  try {
    
    const allBooks = await Book.find()

    res.status(200).json(allBooks)

  } catch (error) { 

    res.status(500).json({ place: "Error trying to get all books", error: error.message})
  }
})

// Get one BookById
router.get('/:bookId', async (req, res) => {
  const { bookId } = getInfo(req)

  try {

    const findBook = await Book.findById(bookId)

    res.status(200).json(findBook)

  } catch (error) {
    
    res.status(500).json({ place: "Error trying to get one book", error: error.message})
  }
})

// Delete one Book - I imagining if it's a good practice to put a validation for the delete routes
// by userId
router.delete('/delete/:bookId', async (req, res) => {
  const { userId, bookId } = getInfo(req)
  
  try {
    await Book.findOneAndDelete({ _id: bookId, userId })

    await User.updateMany({ $pull: { books: bookId }})

    res.status(204).json()

  } catch (error) {

    res.status(500).json({ place: "Error trying to delete one book", error: error.message })

  }
})


module.exports = router