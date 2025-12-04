const express= require('express')
const route = express.Router()

route.get('/signup',(req,res)=>{
    res.status(201).send({message : 'Registration complete.'})
})


module.exports = route