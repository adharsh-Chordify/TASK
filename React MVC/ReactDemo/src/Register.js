import React from 'react'
import { useForm } from 'react-hook-form';
import './App.css';
import {  useState } from 'react';
// import * as yup from "yup";
// import {yupResolver} from "@hookform/resolvers/yup";
import instance from './baseURL';
import { useNavigate } from 'react-router-dom';




// const schema=yup.object().shape({
//     Name:yup.required("This field cannot be empty"),
//     Age:yup.required("This field cannot be empty"),
//     Email:yup.required("This field cannot be empty"),
//     Password:yup.required('This fielld cannot be empty ')
    
  
//   })
  



function Register() {
    const navigate=useNavigate()
    const {register,handleSubmit,reset,formState: {errors}}=useForm({
        
    })

  
    
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
        
          console.log(data);
          const body=data
 
      //    const registerresponse= await instance.post('/register',body);
      // try{    alert(registerresponse.data.message);
      //    navigate('login')
         
      //     reset()}
      //     catch(err){
      //       console.log("The error is ",err);
          // }


          try {
            const registerresponse = await instance.post('/register', body);
            if (registerresponse) {
              // Consider using state or another method to display success messages
              alert(registerresponse.data.message);
              navigate('login');
              reset(); // Assuming this function resets some form fields
            } 
          } catch (err) {
            const te=err.response.data.slice(30,)
            alert(te)
           
          }
          
        //   console.log(data.district);
          // console.log(formdata.agedata);
          // console.log(formdata.namedata);
        })}  >
          <div className="formback">
            <h2 className="heading">Register Form</h2>
            <label>Enter Your Name</label>
            <input {...register('Name' ,{required:"This field cannot be empty"})} type="text" placeholder="Enter the name" id='name'></input> <br></br>
            <p className="error" >{errors.Name?.message}</p> 
           
            
            <label>Enter Your Age</label>
            <input id='age' type="number"  placeholder="Enter your Age" {...register("Age" ,{required:"This field cannot be empty"})} ></input><br></br>
            <p className="error" >{errors.Age?.message}</p>
         
           
            <label>Enter Your Email</label>
            <input id='email' type="email" placeholder="Enter your Email" {...register("Email" ,{required:"This field cannot be empty"})} ></input> <br></br>
            <p className="error" >{errors.Email?.message}</p>
             
            <label>Set Your Password</label>
             <input id='password' type="password" placeholder="Enter your Email" {...register("Password" ,{required:"This field cannot be empty"})} ></input> <br></br>
             <p className="error" >{errors.Password?.message}</p>
             <button className='buttonsub' type='submit'>Submit</button>
     
          </div>
  
      
  
              
        </form>

  
  
  
  
      </div>
  
  
  
  
    )
  
}

export default Register
