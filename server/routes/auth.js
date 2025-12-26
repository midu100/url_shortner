const express= require('express')
const { SignUp, Login, getProfile } = require('../controllers/authController')
const { authMiddleware } = require('../middleware/authMiddleware')
const route = express.Router()

route.post('/signup',SignUp)
route.post('/login',Login)
route.get('/getProfile', authMiddleware ,getProfile)


module.exports = route