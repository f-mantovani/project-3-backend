const { Router } = require('express')

const Event = require('../models/Events.model')
const User = require('../models/User.model')
const checkIfEventExists = require('../controllers/event_controllers/checkIfEventExists')
const confirmEventStatus = require('../controllers/event_controllers/confirmEventStatus')
const createEventReqPayload = require('../controllers/event_controllers/createEventReqPayload')

const router = Router()

router.post('/', async (req, res) => {

  const { title, description, user, date } = createEventReqPayload(req)

  try {

    const is_past = confirmEventStatus(date)

    const newEvent = await Event.create({
      title,
      description,
      user,
      date,
      is_past,
    })

    await User.findByIdAndUpdate(user, { $push: { events: newEvent._id } })

    res.status(200).json(newEvent)

  } catch (error) {

    res.status(500).json({place: 'Error trying to create a event', error: error.message})

  }

})

router.get('/', async (req, res) => {

  const { userId } = req.user

  try {

    const allUserEvents = await Event.find({ user: userId })

    res.status(200).json(allUserEvents)

  } catch (error) {

    res.status(500).json({place: 'Error trying to get events', error: error.message})
  }

})

router.put('/:eventId', async (req, res) => {

  const { title, description, user, date } = createEventReqPayload(req)

  const { eventId } = req.params

  const confirmIfEventIsPast = confirmEventStatus(date)

  try {
    const updatedEvent = await Event.findOneAndUpdate({ _id: eventId, user: user }, {
        title,
        description,
        user,
        date,
        is_past: confirmIfEventIsPast,
      }, { new: true })

    checkIfEventExists(updatedEvent)

    res.status(200).json(updatedEvent)

  } catch (error) {

    res.status(error.status || 500).json({place: 'Error trying to update a event', error: error.message})

  }

})

router.delete('/deleteOne/:eventId', async (req, res) => {

  const { userId } = req.user
  const { eventId } = req.params

  try {

    await Event.findByIdAndDelete({ _id: eventId, user: userId })

    await User.findByIdAndUpdate(userId, { $pull: { events: eventId } })

    res.status(204).json()

  } catch (error) {
    res.status(500).json({ place: 'Error trying delete a event', error: error.message })
  }
})

router.delete('/deleteAll', async (req, res) => {

  const { userId } = req.user

  try {

    await Event.deleteMany({ user: userId })

    await User.findByIdAndUpdate(userId, { $unset: { events: '' } })

    res.status(204).json()

  } catch (error) {

    res.status(500).json({place: 'Error trying to delete all events', error: error.message})
  }
  
})

module.exports = router
