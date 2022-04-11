const { Router } = require('express')

const Task = require('../models/Tasks.model.js')

const router = Router()

router.post('/', async (req, res) => {
  try {
    console.log("teste")
  } catch (error) {
    console.log(error)
    
  }
})

module.exports = router