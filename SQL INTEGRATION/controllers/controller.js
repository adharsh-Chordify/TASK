
const Data=require('../model/model')


const getall= async(req,res)=>{
    const user=await Data.findAll()

     if(user){
        res.status(200).json(user)
     }
     else{
        res.status(200).json("no user found")
     }
  
    
}


const addDetails=async(req,res)=>{
    const {content,description}=req.body

    const user=await Data.findOne({where:{content:content}})
 

    if(user){
        res.status(200).json("The task already exists please recheck")
    }
    else{
        const addedTask= Data.build({
            'content':content,
            'description':description
        })

        await addedTask.save()
        res.status(201).json(`Task added successfully`)
    }



}



const indivitualdata=async(req,res)=>{
    const content=req.params.content

    const user=await Data.findOne({where:{content:content}})

    if(user){
        res.status(200).json(user)
    }
    else{
        res.status(200).json("Data not found")
    }


}


const updateData= async(req,res)=>{

    const user=await Data.findOne({where:{id:req.params.id}})
    
    if(user){
      await  user.set({
            isCompleted:req.body.isCompleted
        })

       await user.save()

       res.status(200).json(`The value is updated ${user}`)

    }
    else{
        res.status(404).json("Data not found")
    }
}

module.exports={getall,addDetails,indivitualdata,updateData}
