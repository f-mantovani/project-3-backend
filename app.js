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

app.use('/task', require('./routes/task.routes'))

app.use('/user', require('./routes/user.routes'))

app.use('/book', require('./routes/book.routes'))

app.use('/event', require('./routes/event.routes'))

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`)
})
