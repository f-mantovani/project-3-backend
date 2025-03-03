const { Router } = require('express')
const path = require('node:path')
const router = Router()

router.get('/', async (req, res) => {

  res.sendFile(path.reolve(__dirname, '../documentation/index.html'))

})

module.exports = router
