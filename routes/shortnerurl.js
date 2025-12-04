const express= require('express')
const route = express.Router()

route.post('/shorturl',(req,res)=>{
    res.status(201).send({message : 'Registration complete.'})
})


module.exports = route