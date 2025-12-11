const jwt = require('jsonwebtoken');
const generateAccToken = (paylod)=>{
      const token = jwt.sign(paylod,process.env.JWT_SECRET,);

      return token

}


const isVerifyToken = (token)=>{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded
}


module.exports = {generateAccToken,isVerifyToken}