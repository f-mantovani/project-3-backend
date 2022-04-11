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
    
    res.status(500).json({ place:"Error trying create new task", error: error.message })
  }
})

router.get('/', async (req, res) => {
  const { userId } = req.user

  try {
    const allTasks = await Task.find({user: userId})

    res.status(200).json(allTasks)

  } catch (error) {

    res.status(500).json({ place: "Error trying to get all tasks", error: error.message })
  }
})

router.put('/:taskId', async (req, res) => {
  const { userId } = req.user
  const { taskId } = req.params
  try {
    
  } catch (error) {
    
  }
})
router.delete('/', async (req, res) => {
  const { userId } = req.user
  try {
    
  } catch (error) {
    
  }
})
router.delete('/:taskId', async (req, res) => {
  const { userId } = req.user
  const { taskId } = req.params
  try {
    
  } catch (error) {
    
  }
})

module.exports = router