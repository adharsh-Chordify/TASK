const express=require('express')
const router=express.Router()

const functionApi=require('../controllers/controller')



router.get('/getall',functionApi.getall)

router.post('/newTask',functionApi.addDetails)

router.get('/indivitual/:content',functionApi.indivitualdata)

router.patch('/patch/:id',functionApi.updateData)







module.exports=router