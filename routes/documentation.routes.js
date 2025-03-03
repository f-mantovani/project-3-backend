const { Router } = require('express')
const path = require('node:path')
const router = Router()

router.get('/', async (req, res) => {

  res.sendFile(path.join(__dirname, 'configuration', 'index.html'))

})

module.exports = router
