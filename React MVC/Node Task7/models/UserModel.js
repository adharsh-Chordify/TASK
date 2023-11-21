const mongoose=require('mongoose')



 const User=mongoose.model('User',{

    Name:String,
    Email:String,
    Password:String,
    Age:Number

})

module.exports=User