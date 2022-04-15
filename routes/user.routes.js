const { Router } = require('express')
const User = require('../models/User.model')
const getUserReq = require('../controllers/user_controllers/getUserReq')
const uploadCloud = require('../config/cloudinary.config')

const router = Router()

router.get('/', async (req, res) => {

    const { userId }  =  getUserReq(req)

    try {

        const { name, email, profileImage } = await User.findById(userId)

        res.status(200).json({name, email, profileImage})

    } catch (error) {

        res.status(error.status || 500).json({ place: 'Error trying to get the user information', error: error.message })

    }

})


router.put('/', async (req, res) => {

    const { name, email, userId }  =  getUserReq(req)

    try {

        const updatedUser = await User.findByIdAndUpdate(userId, { name, email }, { new: true }).select('id name email profileImage')

        res.status(200).json(updatedUser)

    } catch (error) {

        res.status(error.status || 500).json({ place: 'Error trying to update the user information', error: error.message })
    }

})

router.put('/profile-image', uploadCloud.single('image'), async (req, res) => {

    const { userId, path }  =  getUserReq(req)

    try {

        const updatedUser = await User.findByIdAndUpdate(userId, { profileImage: path }, { new: true }).select('id name email profileImage')

        res.status(200).json(updatedUser)

    } catch (error) {

        res.status(error.status || 500).json({ place: 'Error uploading a profile picture', error: error.message })
    }

})


module.exports = router