const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})


const registerSchema=Joi.object({
    Name:Joi.string().required(),
    Email:Joi.string().email().required(),
    Password:Joi.string().min(3).max(8).required(),
    Age:Joi.string().required()
})

module.exports=registerSchema