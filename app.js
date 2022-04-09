require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db.config')

connectDB()
const app = express()

app.use(cors())
app.use(express.json())


app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`)
})