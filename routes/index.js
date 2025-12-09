const express = require('express')
const route = express.Router()
const authRoute = require('./auth')
const shortnerRoute = require('./shortnerurl')
const { redirectUrl } = require('../controllers/shortnerController')


route.get('/',(req,res)=>{
    res.status(200).send({message : 'hello'})
})

// authentication route
route.use('/auth',authRoute)
route.use('/url',shortnerRoute)

// redirectUrl
route.get('/:id',redirectUrl)



// empty Route / wrong url hit korle 404 show korbe
route.use((req,res)=>{
    res.status(404).send({message : '404 not found'})
})



module.exports = route