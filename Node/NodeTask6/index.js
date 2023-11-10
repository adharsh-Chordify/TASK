const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')


const app=express()
const Port=3000

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://127.0.0.1:27017/task5').then( console.log("The Database is connected ") ).catch((err)=>{console.log('The error is',err);})

const User= mongoose.model('User',{
    Name:String,
    Age:Number,
    Email:String,
    Password:String
})

const Todo=mongoose.model('Todo',{
    title:String,
    status:Number,
    userId:String
})


app.post('/register', async (req,res)=>{  //Register
    const userdata=new User ()
    const username=req.body.Name
    const userage=req.body.Age
    const useremail=req.body.Email
    const userpassword=req.body.Password

    User.findOne({Email:useremail}).then(user=>{
        if(user){
            res.send('User Already Exist.Please Sign in')
        }
        else{
            userdata.Name=username
            userdata.Age=userage
            userdata.Email=useremail
            userdata.Password=userpassword
             userdata.save().then((data1)=>{
                console.log('The added user is ',data1);
                res.send("User Added Successfully")
             }).catch((err)=>{
                console.log('The error is ',err);
             })
            
            

        }
    })
})

app.post('/login',(req,res)=>{    //login 
    const userlogin=req.body.Email
    const userpassword=req.body.Password
   
    User.findOne({Email:userlogin,Password:userpassword}).then(user=>{
        if(user){
            res.send("Welcome Back")
        }
        else{
            res.send('Invalid username or password')
        }
    })

})

app.post('/addtodo',(req,res)=>{  //add todos 
    const usertodo=new Todo()
    const userid=req.body.id
    const usertitle=req.body.title
    
    usertodo.title=usertitle
    usertodo.status=0
    usertodo.userId=userid
    usertodo.save().then(()=>{
        res.send("Todo Added Successfully")
    }).catch((err)=>{
        res.send('The error occured is ',err)
    })
    
})

// app.post('/todotasks',(req,res)=>{

//  const userInputid=req.body.id
//  console.log(userInputid);

// Todo.find({ userId: userInputid })
// .then((data) => {
//   if (data) {
//     res.send(`The requested todos are  ${data}`);
//   } else {
//     res.send('Unable to find the requested todos.');
//   }
// })
// .catch((err) => {
//   console.log('The Errors are ', err);
// });
// });


app.get('/todotasks/:id',(req,res)=>{   //for the printing of the todo list of a specific person
   const tempid= req.params.id;
   Todo.find({userId:tempid}).then((data)=>{
    if (data){
        res.send(`The requested todos are ${data}`)
    }
    else{
        res.send("Unable to load the data")
    }
   })
   .catch((err)=>{
    res.send("The erros are" ,err)
   })
})

app.post('/todoupdate',(req,res)=>{       //for  the updation of the tasks 
    const todoId=req.body.tid
    const todotitle=req.body.title
    Todo.findOne({_id:todoId}).then((data)=>{
        if (data){
               console.log(data);
            data.title=todotitle
            data.save().then(()=>{
                res.send("The data is updaated")
            }).catch((err)=>{
                res.send('This error is coming after the save')
            })
        
        }
        else{
            res.send("Unable to find the task")
        }
    })
})


app.post('/tododelte/:id',(req,res)=>{ //deleting of todos
   const todoId=req.params.id
   Todo.deleteOne({_id:todoId}).then(()=>{
    res.send("Todo is deleted")
   }).catch((err)=>{
    res.send('The errors is ',err)
   })
})

app.listen(Port,()=>{
    console.log('The server is running in the port',Port);
})




