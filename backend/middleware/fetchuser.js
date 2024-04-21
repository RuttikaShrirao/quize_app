const jwt = require('jsonwebtoken')
const reponseFormat = require('../utils')
const SECRET_KEY="jwtapi$mongodb"

const fetchuser = (req,res,next)=>{
const token = req.header('token')

if(!token){
    reponseFormat(res, status_code=401, msg="please authenticate using valid token")
    
}
try{
    const data= jwt.verify(token,SECRET_KEY)
    req.id= data
        next()
}catch(error){
    reponseFormat(res, status_code=401, msg="please authenticate using valid token ")
}


}
module.exports = fetchuser