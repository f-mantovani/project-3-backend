const { Router } = require('express')
const User = require('../models/User.model')
const getUserReq = require('./user_functions/getUserReq')

const router = Router()

router.get('/', async (req, res) => {

    const { userId }  =  getUserReq(req)

    try {

        const { name, email, profile_image } = await User.findById(userId)

        res.status(200).json({name, email, profile_image})

    } catch (error) {

        res.status(500).json({error: error.message})

    }
})


router.put('/', async (req, res) => {

    const { name, email, userId }  =  getUserReq(req)

    try {

        const updatedUser = await User.findByIdAndUpdate(userId, {name, email}, {new: true}).select('id name email')

        res.status(200).json(updatedUser)

    } catch (error) {

        res.status(error.status || 500).json({place: 'Error trying to update the user information', error: error.message})
    }

})


module.exports = router