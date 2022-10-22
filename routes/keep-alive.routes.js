const { Router } = require('express')
const Tasks = require('../models/Tasks.model')

const router = Router()

router.get('/', async (req, res) => {
  
  try {
    await Tasks.find()
    res.status(200).json({ message: 'It worked' })
  } catch (error) {
    res.status(500).json({ message: "it didnt work" })
  }

})

module.exports = router