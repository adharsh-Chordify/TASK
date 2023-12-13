const express=require('express')
const bodyParser=require('body-parser')
const{sequelize,connect}=require('./model/db')




const app=express()
const port=4000
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/',require('./router/router'))




app.listen(port,async ()=>{
    console.log("The server is running in the port",port);
    await connect()
})