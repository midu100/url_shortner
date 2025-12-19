const express= require('express')
const { SignUp, Login, getProfile } = require('../controllers/authController')
const route = express.Router()

route.post('/signup',SignUp)
route.post('/login',Login)
route.get('/getProfile',getProfile)


module.exports = route