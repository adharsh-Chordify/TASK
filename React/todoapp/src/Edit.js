import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './todo.css'
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
const schema=yup.object().shape({
  updatename:yup.string().required("This field cannot be empty")
})

function Edit({getupdateddata ,getstatus}) {
 
    const {register,handleSubmit,formState:{errors}}=useForm({
      resolver:yupResolver(schema)
    })

    const [updatedata,setupdateData]=useState([])
    const [editcondition,setEditcondition]=useState(true)

   getupdateddata(updatedata)

   getstatus(editcondition)
   

  return (
    <div>
        <form onSubmit={handleSubmit((data)=>{
             let temp2=[...updatedata]
             temp2.push({name:data.updatename,place:data.updateplace,status:false})
             setupdateData(temp2)
             setEditcondition(false)
            //  setEditcondition(false)
        })}> 
        <label>Edit Task</label> <br></br>
        <input className='inputd' {...register('updatename')} placeholder='Value to be updated'></input> <br></br>
        <p className="error" >{errors.updatename?.message}</p> 
        {/* <label>Edit Place</label> <br></br>
        <input className='inputd' {...register('updateplace')} placeholder='Value to be updated'></input> <br></br> */}
        <button type='submit'  >Update</button>
        </form>
       
       
    </div>
  )
}

export default Edit
