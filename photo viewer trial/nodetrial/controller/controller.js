const {User}=require('../models')

const Register=async(req,res)=>{
     const{Email,firstName,lastName,Password}=req.body
     
     
        
        
        
        
         const addedTask= await  User.create({email:Email,fistName:firstName,lastName:lastName,password:Password})
            // await addedTask.save()
            res.status(201).json(`Task added successfully`)
            
            
            
        

     


}

module.exports={Register}