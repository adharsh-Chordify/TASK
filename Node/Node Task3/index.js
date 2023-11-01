const express=require('express')

const bodyParser = require('body-parser');
const app=express()
const port =3000

app.use(bodyParser.urlencoded());

app.get('/',(req,res)=>{
    console.log(req.body);
    res.send("This is a get request")
})

app.put('/put',(req,res)=>{
    res.send("This is a put request")
})
app.patch('/patch',(req,res)=>{
    res.send("This is a patch request")
})
app.post('/post',(req,res)=>{
    res.send(req.body)
})
app.delete('/delete',(req,res)=>{
    res.send("This is a delete request")
})


app.listen(port,()=>{
    console.log("The server is running in port",port);
})