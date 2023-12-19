const express=require('express')
const router=express.Router()

const functionApi=require('../controller/controller')

router.post('/adduser',functionApi.Register)



module.exports=router