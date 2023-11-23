const bycrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const User=require('../models/UserModel')


const jwtsecret="asfdjkdfjldddddvdfndifsddfrgfkgnvoiloveu"







const registerfunction= async (req,res)=>{
const user=new User()
const{Name,Email,Password,Age}=req.body
 
   const data= await User.findOne({Email})
 try{
    if(data){
        res.status(200).json({message:'The user already exist, please login'})
    }
    else{
        bycrypt.hash(Password,10).then(async(hash)=>{
           
            user.Name=Name
            user.Email=Email
            user.Password=hash
            user.Age=Age
            user.FileData=req.file.path

            await user.save()
        })
        

        
        res.status(200).json({message:'User is added successfully'})
    }
}
catch(err){
    res.status(404).json(err)
}


}


const loginfunction= async(req,res)=>{

    try{
       
        const{Email,Password} =req.body

        const user= await User.findOne({Email})
        // console.log(user)
        if(user){
           bycrypt.compare(Password, user.Password).then((data)=>{
            if(data){
                const maxAge=3*60*60
                const token=jwt.sign({id:user._id},jwtsecret,{expiresIn:maxAge})  
                  res.status(200).json({
                   message:"Login Successfull",
                   token: token,
                   user:user
                  })
            }else {
                res.status(200).json({ message: "Invalid Password" });
            }
   
           });
        
        }
        else{
            res.status(200).json({message:"Invalid User"})
        }
     
    


    }
   catch(err){
     res.send('The catch error is ',err)
   }


}



const updationFunction=async(req,res)=>{
    try{
        const {Name,id}=req.body
        
       const user =await User.findById(id)
       if(user){
          user.Name=Name
          await user.save()
          res.status(200).json({
            message:"Updation Successful",
            user:user
          })
       }

    }
    catch(err){
        res.status(400).json("This is a catch error" ,err)
    }
}


module.exports={
    registerfunction,
    loginfunction,
    updationFunction
}