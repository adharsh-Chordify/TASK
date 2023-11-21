const express=require('express')
const bodyParser=require('body-parser')

const cors=require('cors')

require('./models/Connection')
// require('./controllers/UserController')

const app=express()
const port=4000

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',require('./routes/userRouter'))





app.listen(port,()=>{
    console.log('The server is running in ',port);
})



