const jwt = require('jsonwebtoken')
const verifyCredentials  = require('../controllers/auth_controllers/verifyCredentials')

const auth = (req, res, next) => {

    try {

        const bearer = req.get('Authorization')

        verifyCredentials(!bearer, 401, "Access denied - unauthorized user")

        const token = bearer.split(' ')[1]

        const decodedToken = jwt.verify(token, process.env.SECRET_JWT)

        req.user = {...decodedToken}

        next()


    } catch (error) {

        res.status(error.status || 500).json(error.message)
    }
}

module.exports = auth