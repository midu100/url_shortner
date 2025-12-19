const { isValidUrl } = require("../utils/regexValidation")
const generateRandomStr = require('../utils/generateRandomStr')
const shortnerSchema = require("../models/shortnerSchema")

// const generateRandomStr = (length)=>{
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'
//     const randomStr = ''
    
//     for(let i = 0 ; i < length ; i++){
//         const randomNum = Math.floor(Math.random()*characters.length)
//          randomStr += characters[randomNum]
//     }
//     return randomStr

// }

const createShortUrl = async (req,res)=>{
    try {
        
        const {urlLong} = req.body

        // console.log('user',req.user)
       

        if(!urlLong) return res.status(400).send({message : 'Enter url please'})
        if(!isValidUrl(urlLong)) return res.status(400).send({message : 'Invalid Url'})

        urlShort = generateRandomStr()

        // send to Database
        const urlData = new shortnerSchema({
            urlLong,
            urlShort,
            user : req.user?.id
            
        })
        urlData.save()


        // success
        res.status(201).send({
            longUrl : urlData.urlLong,
            shortUrl : urlData.urlShort
        })



    } 
    
    catch (error) {
       console.log(error)    
    }
}


// ========= Redirect Link ================

const redirectUrl = async (req,res)=>{
    try {
        
        const params = req.params
        
        if(!params.id) return res.status(400).send({message : 'Invalid address'})

        const urlData = await shortnerSchema.findOne({urlShort : params.id})
        // console.log('urlData',urlData)
        if(!urlData) return res.status(404).send({message : '404 - Not Found'})

        // urlData er moddhe user ache kina / login user ache kina check korbe
        if(urlData.user){
            urlData.visitHistory.push({'visitTime': Date.now()})
            urlData.save()
        }

        // redirect
        res.redirect(urlData.urlLong)


    } 
    
    catch (error) {
      console.log(error)    
    }
}


// =====get all url / login kora thakle user er banano sokol link dekhte parbe
const getShortUrls = async(req,res)=>{
    try {
        
        const user = req.user
        // console.log('user',user)
        const urlHistory = await shortnerSchema.find({user : user.id}).select('-user')

        res.status(200).send(urlHistory)


    } 
    
    catch (error) {
       console.log(error) 
       res.send(error)   
    }
}


module.exports = {createShortUrl,redirectUrl,getShortUrls}