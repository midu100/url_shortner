const UserScema = require("../models/UserScema")
const { isValidEmail, isValidPass } = require("../utils/regexValidation")
const jwt = require('jsonwebtoken');
const { generateAccToken } = require("../utils/tokens");


const SignUp =async (req,res)=>{
   try {
     const {fullName,email,password} = req.body

     if(!fullName) return res.status(400).send({message : 'FullName is required.'})
     if(!email) return res.status(400).send({message : 'Email is required.'})
     if(!isValidEmail(email)) return res.status(400).send({message : 'Please enter valid email'})
     if(!password) return res.status(400).send({message : 'Password is required.'})
     if(!isValidPass(password)) return res.status(400).send({message : 'Please choose strong password'})
     
     const existUser = await UserScema.findOne({email})
     if(existUser) return res.status(400).send({message : 'User already exist.'})

    // send to database
    const user = new UserScema({
        fullName,
        email,
        password,
    })
    await user.save()

    // success
    res.status(201).send({message : 'Registration Complete.'})


   } 
   
   catch (error) {
     console.log(error) 
   }
}

// =================== Login ========================
const Login = async (req,res)=>{
    try {
        const{email,password} = req.body

        if(!email || !password) return res.status(400).send({message : 'All feild must be filled in.'})
        if(!isValidEmail(email)) return res.status(400).send({message : 'Enter valid email'})
        
        // database data/info
        const userData = await UserScema.findOne({email})
        if(!userData) return res.status(400).send({message : 'User not found.'})

        const matchPassword = await userData.comparePassword(password)
        if(!matchPassword) return res.status(400).send({message : 'incorrect password.'})
        
        const token = generateAccToken({id : userData._id , email : userData.email})
        console.log(token)
        res.cookie('acc_token',token)
          

        // success
        res.status(200).send({message : 'Login Successful',acc_token : token})


    } 
    
    catch (error) {
       console.log(error)    
    }
}


// ============= Get Profile =========================
const getProfile = async (req,res)=>{
  try {
    const user = req.user

    const userData = await UserScema.findById(user.id)

    res.status(200).send({message : 'userData',userData})
  } 
  catch (error) {
     console.log(error)  
  }
}



module.exports = {SignUp,Login}