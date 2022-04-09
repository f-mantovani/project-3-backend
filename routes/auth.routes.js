const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { Router } = require('express')
const { validateSignup, verifyCredentials } = require('../validations/auth.validation.js')
const User = require('../models/User.model.js')

const router = Router()


router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body
  try {
    validateSignup(name, email, password)
    const userFromDB = await User.findOne({ email })
    verifyCredentials(userFromDB, 400,"User already exists")
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

router.post('/login', async ( req, res) => {
  const { email, password } = req.body
  try {
    const userFromDB = await User.findOne({ email })
    verifyCredentials(!userFromDB, 401, "Email or password incorrect")
    console.log("passou da primeira verificaçõ de credenciais")
    const comparePassword = await bcrypt.compare(password, userFromDB.passwordHash)
    console.log(comparePassword)
    verifyCredentials(!comparePassword, 401, "Email or password incorrect")
    console.log("passou da segunda verificaçõ de credenciais")
    const payload = { email, name: userFromDB.name, userId: userFromDB._id}
    const token = jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: '1day'})
    res.status(200).json({token})
  } catch (error) {
    res.status(error.status || 500).json({ place: "Error in login", error: error.message})
  }
})

module.exports = router