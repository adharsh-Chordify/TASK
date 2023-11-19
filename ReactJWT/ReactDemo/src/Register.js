import React from 'react'
import { useForm } from 'react-hook-form';
import './App.css';
import {  useState } from 'react';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import instance from './baseURL';
import { useNavigate } from 'react-router-dom';




const schema=yup.object().shape({
    Name:yup.string().required("This field cannot be empty"),
    Age:yup.string().max(2).required("This field cannot be empty"),
    Email:yup.string().email().required("This field cannot be empty"),
    Password:yup.string().required('This fielld cannot be empty ')
    
  
  })
  



function Register() {
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
          
          // alert(data)
          setName(data.Name);
          setAge(data.Age);
          setEmail(data.Email);
          setPassword(data.Password)
          console.log(data);
          const body=data
 
         const registerresponse= await instance.post('/register',body);
         alert(registerresponse.data.message);
         navigate('login')
         
          reset()
        //   console.log(data.district);
          // console.log(formdata.agedata);
          // console.log(formdata.namedata);
        })}  >
          <div className="formback">
            <h2 className="heading">React Form</h2>
            <label>Enter Your Name</label>
            <input {...register('Name')} type="text" placeholder="Enter the name" id='name'></input> <br></br>
               <p className="error" >{errors.Name?.message}</p>  
           
            
            <label>Enter Your Age</label>
            <input id='age' type="number"  placeholder="Enter your Age" {...register("Age")} ></input><br></br>
           
              <p className="error" >{errors.Age?.message}</p>  
           
            <label>Enter Your Email</label>
            <input id='email' type="email" placeholder="Enter your Email" {...register("Email")} ></input> <br></br>
            <p className="error" >{errors.Email?.message}</p>
             
            <label>Set Your Password</label>
             <input id='password' type="password" placeholder="Enter your Email" {...register("Password")} ></input> <br></br>
             <p className="error" >{errors.Password?.message}</p>
             <button type='submit'>Submit</button>
     
          </div>
  
      
  
              
        </form>

  
  
  
  
      </div>
  
  
  
  
    )
  
}

export default Register
