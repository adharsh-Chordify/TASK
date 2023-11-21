const express=require('express')
const Authendication=require('../middlewares/JwtMiddleware')

const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})
const apifunction=require('../controllers/UserController')
const registerSchema=require('../middlewares/Joivalidation')

const router=express.Router()

router.post('/register',validator.body(registerSchema),apifunction.registerfunction)

router.post('/login',apifunction.loginfunction)

router.post('/update',Authendication,apifunction.updationFunction)





module.exports=router