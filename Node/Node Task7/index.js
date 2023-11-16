const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const bycrypt=require('bcryptjs')


const app=express()
const port=3000

app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/task6').then(console.log("The database is connected")).catch((err)=>{ console.log('The error is ',err); })

const User=mongoose.model('User',{

    Name:String,
    Email:String,
    Password:String,
    Age:Number

})

app.post('/register',async (req,res)=>{
const user=new User()
const{Name,Email,Password,Age}=req.body
 
   const data= await User.findOne({Email})

    if(data){
        res.send('The user already exist, please login')
    }
    else{
        bycrypt.hash(Password,10).then(async(hash)=>{
           
            user.Name=Name
            user.Email=Email
            user.Password=hash
            user.Age=Age

            await user.save()
        })
        

        
        res.send('User is added successfully')
    }


})


app.post('/login', async(req,res)=>{

    try{
       
        const{Email,Password} =req.body

        const user= await User.findOne({Email})
        console.log(user)
        if(user){
          await bycrypt.compare(Password, user.Password).then((data)=>{
                 
               res.send("Login Successfull")
    
           })
           .catch((err)=>{
               res.send(err)
           })
        }
        else{
            res.send("Invalid User")
        }
    
         const data=User.findOne({Email,Password})

    }
   catch(err){
     res.send('The catch error is ',err)
   }


})


app.listen(port,()=>{
    console.log('The server is running in ',port);
})



