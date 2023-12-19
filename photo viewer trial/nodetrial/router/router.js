const express=require('express')
const router=express.Router()
const midllewares=require('../middlewares/jwtmiddleware')
const Joi=require('joi')
const validator=require('express-joi-validation').createValidator()
const multer=require('multer')
const storage=multer.diskStorage({
    destination:'uploads/',
    filename:function(req,img,callBack){
        callBack(null,img.filename)
    }
})
const upload=multer({storage:storage})



const registerSchema=Joi.object({
    Email:Joi.string().email().required(),
    firstName:Joi.string().required(),
    lastName:Joi.string().required(),
    Password:Joi.string().min(3).max(8).required()
})




const functionApi=require('../controller/controller')


router.post('/adduser',validator.body(registerSchema),functionApi.Register)

router.post('/adddata',upload.single('img'),midllewares  ,functionApi.post)
router.post('/login',functionApi.Login)



module.exports=router