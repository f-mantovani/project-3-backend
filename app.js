require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connect = require('./config/db.config')

connect()

const app = express()

app.use(cors())

app.use(express.json())

app.use('/auth', require('./routes/auth.routes'))

app.use(require('./middleware/auth.middleware'))



app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`)
})