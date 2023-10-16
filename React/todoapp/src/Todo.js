import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Edit from './Edit'
import './todo.css'
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
const schema=yup.object().shape({
  name:yup.string().required("This field cannot be empty")
})

function Todo() {


  const { register, handleSubmit, formState: { errors },reset } = useForm({
    resolver:yupResolver(schema)
    }
  )
  const [updatevalue, setupdatevalue] = useState()
  const [editstatus, setEditstatus] = useState(false)
  const [editcondition,setEditcondition]=useState(true)
  const [arr, setarr] = useState([])
  const [indexval, setIndexval] = useState()
  const deltefunc = (id) => {
    // console.log(id);
    let reduced = [...arr]
    reduced.splice(id, 1)
    setarr(reduced)
  }
  const editfunc = (index) => {
    setEditstatus(true)
    setEditcondition(true)

    setIndexval(index)
    // setEditcondition(true)
   
  }
  let getstatus=function(editcondition){
    setEditcondition(editcondition)
        
    
   

  }
  let getupdateddata = function (updatedata) {

    setupdatevalue(updatedata)
    let tempupdate = [...arr]
    //    console.log(tempupdate[indexval]); 
    let temm = updatevalue;
    let tm = []
    updatedata.map(i => {
      tm = i
    })
    // console.log(tm);
    tempupdate[indexval].name = tm.name
    tempupdate[indexval].place = tm.place
    setEditcondition(tm.status)
    

    // setEditstatus(tm.status)
    //  console.log(tm.status);
    // setEditcondition(editcondition)

  }
  return (
    <div className='todoapp'>
      <form className='todoform' onSubmit={handleSubmit((data) => {
        let temparray = [...arr]
        temparray.push({ name: data.name, place: data.place })
        setarr(temparray)
        reset()

        // console.log(arr);
      })}>
        <h3>Todo App</h3>
        <div>
          <input className='inputdata' {...register('name')} placeholder='Enter Task'></input>   <button className='buttonform' type='submit'>Add</button>
          <p className="error" >{errors.name?.message}</p> 
          {/* <input {...register("place", { required: "THis field should not be empty" })} placeholder='Enter Your Place'></input> */}
       
        </div>
    
      </form>
   <div className='overview'>
        <div className='datazone'>
         
          <table>
            <thead>
              <th>Task</th>
              {/* <th>Place</th> */}
            </thead>
            <tbody>
  
              {arr && arr.map((data, index) => {
  
                return (
                  <tr key={index}>
                    <td>{data.name}</td>
                    {/* <td>{data.place}</td> */}
                    <td> <button className='editbut' onClick={() => editfunc(index)}>Edit</button>   </td>
                    <td> <button className='deletebut' onClick={() => deltefunc(index)}>Delete</button> </td>
                  </tr>
                )
  
              })
  
              }
  
            </tbody>
          </table>
        </div>
        <div className='editzone'>
          {editcondition && editstatus ? <Edit getupdateddata={getupdateddata} getstatus={getstatus} ></Edit> : null}
        </div>
   </div>
    </div>
  )
}

export default Todo
