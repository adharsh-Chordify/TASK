const {User,Post}=require('../models')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwtsecret="asfdjkdfjldddddvdfndifsddfrgfkgnvoiloveu"

const Register=async(req,res)=>{
     const{Email,firstName,lastName,Password}=req.body
     
     const user=await User.findOne({where:{email:Email}})
     try{
        if(user){
            res.status(200).json({message:"User already exist please login to continue"})
        }
        else{
           const hash=await bcrypt.hash(Password,10)
                const addedTask= await  User.create({email:Email,fistName:firstName,lastName:lastName,password:hash})
                // await addedTask.save()
                res.status(201).json({message:"User registered successfully"})
            }
          
        }
        catch(err){
            res.status(404).json(`the error is ${err}`);
         }
     }
     
        


const Login=async(req,res)=>{
    const {Email,Password}=req.body
    const user=await User.findOne({where:{email:Email}})
    console.log(user);
    try{
        if(user){
           const data=await bcrypt.compare(Password, user.password)

           if(data){
            const maxAge=3*60*60
            const token=jwt.sign({uuid:user.uuid},jwtsecret,{expiresIn:maxAge})
            res.status(200).json({message:"Login Successful",token:token,user:user})
           }
           else{
             res.status(200).json({message:"Incorrect password"})
           }
        }
        else{
            res.status(200).json({message:"User not found please register first"})
        }
    }
    catch(err){
        console.log(err);
    }

}



const post=async(req,res)=>{
    const{UUID,img,caption}=req.body
        const user= await  User.findOne({where:{uuid:UUID}})
        console.log(user.uuid);
        const post=await Post.create({email:user.email,uuid:user.uuid,image:img,caption:caption})
           // await addedTask.save()
           res.status(201).json(`Task added successfully`)

}



module.exports={Register,post,Login}