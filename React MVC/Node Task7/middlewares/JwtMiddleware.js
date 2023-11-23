const User=require('../models/UserModel')

const jwt=require('jsonwebtoken')
// const jwtsecret=process.env.jwtsecret
const jwtsecret="asfdjkdfjldddddvdfndifsddfrgfkgnvoiloveu"



const Authendication=async(req,res,next)=>{
    const temptoken=req.body.token
    const data=await jwt.verify(temptoken,jwtsecret)
    const userData=await User.findById(data.id)
    if(!userData){
        return res.status(200).json({message:"User not found"})
    }
    else{

        next()

    }
  

}
module.exports=Authendication