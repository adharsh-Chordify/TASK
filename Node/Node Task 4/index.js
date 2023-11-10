const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require("body-parser")


const app=express()
const port=3000

mongoose.connect('mongodb://127.0.0.1:27017/test1').then(console.log("The database is connected")).catch(err=>{
    console.log("THe errror is ",err);
})

app.use(bodyParser.urlencoded());

const User=mongoose.model('User',{
    name:String,
    age:Number
})





app.post('/post',(req,res)=>{
    const userData=new User()

    userData.name=req.body.name
    userData.age=req.body.age

    userData.save().then(data=>{
        console.log("data is ",data);
    }).catch((err)=>{
        console.log(err);
    })
    res.send('You have submitted ')
   
})

app.post('/postupdate', (req, res) => {
    const name = req.body.name;
    const updatename=req.body.updatename

    User.findOne({ name: name }).then(user => {
        if (user) {
            user.name = updatename;
            user.save()
            res.send(`The retrieved data is ${user.name}`);
        } else {
            res.send("Unable to find the user");
        }
    });
});

app.post('/delteuser',(req,res)=>{
    const name=req.body.name
    User.deleteOne({name: name}).then(user=>{
        if(user.deletedCount>0){
            // user.save()
            res.send('The deleted user is ',user)
        }
        else{
            res.send("Unable to find the user")
        }
    })
})




app.listen(port,()=>{
    console.log("The server is running");
})