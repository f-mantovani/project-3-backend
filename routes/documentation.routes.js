const { Router } = require('express')

const router = Router()

router.get('/', async (req, res) => {

  res.sendFile(`${__dirname}/documentation/index.html`)

})

module.exports = router
