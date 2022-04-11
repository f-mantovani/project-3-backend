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

router.post('/', async (req, res) => {
  const { name, author } = req.body
  const { userId } = req.params
  try {
    
  } catch (error) {
    
  }
})
router.post('/', async (req, res) => {
  const { name, author } = req.body
  const { userId } = req.params
  try {
    
  } catch (error) {
    
  }
})
router.post('/', async (req, res) => {
  const { name, author } = req.body
  const { userId } = req.params
  try {
    
  } catch (error) {
    
  }
})

module.exports = router