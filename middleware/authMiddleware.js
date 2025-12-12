const { decode } = require("jsonwebtoken")
const { isVerifyToken } = require("../utils/tokens")

const authMiddleware = (req,res,next)=>{
    try {
        
        const token = req.headers.acc_token
        
       
        const decoded = isVerifyToken(token)
        req.user = decoded
        
        next()

    } 
    
    catch (error) {
       console.log(error)     
    }
}


module.exports = authMiddleware