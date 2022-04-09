const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { Router } = require('express')
const { validateSignup, checkingUserExistence } = require('../validations/auth.validation.js')
const User = require('../models/User.model.js')

const router = Router()


router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body
  try {
    validateSignup(name, email, password)
    const userFromDB = await User.findOne({email})
    checkingUserExistence(userFromDB)
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)
    const newUser = await User.create({
      name, 
      email,
      passwordHash
    })
    const userCreated = {
      name: newUser.name,
      email: newUser.email
    }
    res.status(201).json(userCreated)
  } catch (error) {
    res.status(error.status || 500).json({ place: "Error in signup", error: error.message })
  }
})

module.exports = router