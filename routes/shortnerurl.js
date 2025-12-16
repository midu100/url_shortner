const express= require('express')
const { createShortUrl, getShortUrls } = require('../controllers/shortnerController')
const {isAuthenticMiddle,authMiddleware} = require('../middleware/authMiddleware')
const route = express.Router()

route.post('/create',isAuthenticMiddle, createShortUrl)
route.get('/geturls',authMiddleware,getShortUrls)


module.exports = route