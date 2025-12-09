const { isValidUrl } = require("../utils/regexValidation")
const generateRandomStr = require('../utils/generateRandomStr')

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

        if(!urlLong) return res.status(400).send({message : 'Enter url please'})
        if(!isValidUrl(urlLong)) return res.status(400).send({message : 'Invalid Url'})

        urlShort = generateRandomStr()



    } 
    
    catch (error) {
       console.log(error)    
    }
}


module.exports = {createShortUrl}