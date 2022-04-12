const { Router } = require('express')

const Task = require('../models/Tasks.model.js')
const User = require('../models/User.model.js')

const router = Router()

router.post('/', async (req, res) => {
  const { title } = req.body

  const { userId } = req.user
  try {
    const newTask = await Task.create({ title, user: userId })
    
    await User.findByIdAndUpdate(userId, { $push: { tasks: newTask._id }})
    
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

  const { title } = req.body
  try {
    const updatedTask = await Task.findOneAndUpdate({ _id: taskId, user: userId }, { title }, { new: true})

    res.status(200).json(updatedTask)

  } catch (error) {

    res.status(500).json({ place: "Error trying to update a task", error: error.message })
  }
})

router.delete('/deleteOne/:taskId', async (req, res) => {
  const { userId } = req.user

  const { taskId } = req.params
  try {

    await Task.findOneAndDelete({ _id: taskId, user: userId })

    await User.findByIdAndUpdate(userId, { $pull: { tasks: taskId }})

    res.status(204).json()

  } catch (error) {
    res.status(500).json({ place: "Error trying delete a task", error: error.message})
  }
})

router.delete('/deleteAll', async (req, res) => {
  const { userId } = req.user
  try {

    await Task.deleteMany({ user: userId })

    await User.findByIdAndUpdate(userId, { $unset: { tasks:"" }})

    res.status(204).json()

  } catch (error) {

    res.status(500).json({ place: "Error trying delete all tasks", error: error.message })
  }
})

module.exports = router