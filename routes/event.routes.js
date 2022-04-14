const { Router } = require('express')

const Event = require('../models/Events.model')
const User = require('../models/User.model')
const checkIfEventExists = require('../controllers/event_controllers/checkIfEventExists')
const confirmEventStatus = require('../controllers/event_controllers/confirmEventStatus')
const getEventReq = require('../controllers/event_controllers/getEventReq')
const verifyUserId = require('../controllers/helper_controllers/verifyUserId')

const router = Router()

router.post('/', async (req, res) => {

  const { title, description, user, date } = getEventReq(req)

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

    res.status(error.status || 500).json({ place: 'Error trying to create a event', error: error.message })

  }

})

router.get('/', async (req, res) => {

  const { user } = getEventReq(req)

  try {

    const allUserEvents = await Event.find({ user: user })

    res.status(200).json(allUserEvents)

  } catch (error) {

    res.status(error.status || 500).json({ place: 'Error trying to get events', error: error.message })

  }

})

router.put('/:eventId', async (req, res) => {

  const { title, description, user, date, eventId } = getEventReq(req)

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

    res.status(error.status || 500).json({ place: 'Error trying to update a event', error: error.message })

  }

})

router.delete('/deleteOne/:eventId', async (req, res) => {

  const { user, eventId } = getEventReq(req)

  try {

    const deleted = await Event.findOneAndDelete({ _id: eventId, user: user })

    verifyUserId(deleted, "You can't delete events created by another user")

    await User.findByIdAndUpdate(user, { $pull: { events: eventId } })

    res.status(204).json()

  } catch (error) {

    res.status(error.status || 500).json({ place: 'Error trying delete a event', error: error.message })

  }

})

router.delete('/deleteAll', async (req, res) => {

  const { user } = getEventReq(req)

  try {

    await Event.deleteMany({ user: user })

    await User.findByIdAndUpdate(user, { $unset: { events: '' } })

    res.status(204).json()

  } catch (error) {

    res.status(error.status || 500).json({ place: 'Error trying to delete all events', error: error.message })
    
  }

})

module.exports = router
