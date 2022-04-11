const { Router } = require('express')

const Task = require('../models/Tasks.model.js')
const User = require('../models/User.model.js')

const router = Router()

router.post('/', async (req, res) => {
  const { title } = req.body

  const { userId } = req.user

  try {

    const newTask = await Task.create({ title, user: userId })
    
    const user = await User.findByIdAndUpdate(userId, { $push: { tasks: newTask._id }})
    
    res.status(201).json(newTask)
  
  } catch (error) {
    
    res.status(500).json({ place:"error trying create new task", error: error.message })
  }
})

module.exports = router