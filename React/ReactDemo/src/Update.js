import React from 'react'
import { useForm } from 'react-hook-form';
import './App.css';
import {  useState } from 'react';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import instance from './baseURL';
import { useNavigate } from 'react-router-dom';


const schema=yup.object().shape({
    Name:yup.string().required("This field cannot be empty")

    
  
  })

function Update() {
    const navigate=useNavigate()

    const {register,handleSubmit,reset,formState: {errors}}=useForm({
        resolver:yupResolver(schema)
         })
     
         const [Name,setName]=useState()
         const [Age,setAge]=useState()
         const [Email,setEmail]=useState()
         const [Password,setPassword]=useState()
         
     //    const temp=watch("state")
       
       // console.log(errors);
       // console.log(watch());
     //   const handleChange =(e)=>{
     //     setStatevalue(e.target.value)
     //     console.log(district);
     //   }
       
         return (
           <div className="App">
             <form className="formdata" onSubmit={handleSubmit(async (data)=>{
               const id=localStorage.getItem('id')
               const token=localStorage.getItem('token')
               // alert(data)
               const body={
                 Name:data.Name,
                 id:id,
                 token:token

               }
               console.log(body);
            //    const body=data
      
               const registerresponse= await instance.post('/update',body);
              
              alert(registerresponse.data.message);

            //   if(registerresponse.data.message=="Login Successfull"){
            //     localStorage.setItem('token',`${registerresponse.data.temp}`)
            //     navigate('/')
            //   }
              
              
              
            //   console.log(registerresponse);
               reset()
             //   console.log(data.district);
               // console.log(formdata.agedata);
               // console.log(formdata.namedata);
             })}  >
               <div className="formback">
                 <h2 className="heading">React Form</h2>
                 
            
                 <label>Enter Your Updated Name</label>
                  <input id='name' type="text" placeholder="Enter your Name" {...register("Name")} ></input> <br></br>
                  <p className="error" >{errors.Name?.message}</p>
                  <button type='submit'>Submit</button>
          
               </div>
       
           
       
                   
             </form>
     
       
       
       
       
           </div>
       
       
       
       
         )
}

export default Update
