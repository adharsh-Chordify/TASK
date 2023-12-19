import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import "./register.css"
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';



const schema=yup.object().shape({
    Email:yup.string().email().required("This field cannot be empty"),
    FirstName:yup.string().required("This field cannot be empty"),
    LastName:yup.string().required("This field cannot be empty"),
    Password:yup.string().min(5).required("This field cannot be empty"),
   ConfirmPassword:yup.string().required("This field cannot be empty")

})
function Register() {
    const navigate=useNavigate()
    const [confirmError,setconfrimError] =useState('')
    const {register,handleSubmit,reset,formState: {errors}}=useForm({
        resolver:yupResolver(schema)
         })







  return (
    <>
     <div className='w-75 mx-auto temp  row'>
          <div className='col-lg-6 loginrightside'> 
          <h2 className='text-center'>Register</h2>
             <img src='https://i.postimg.cc/8CYTkmwF/Data-security-05.jpg' className='w-75'></img>
          </div>
          <div className='col-lg-6'> 
                 <form className='inputformdata'onSubmit={handleSubmit (async(data)=>{
                      console.log(data);
                      if(data.Password!=data.ConfirmPassword){
                        setconfrimError(true)
                      }
                      else{
                        setconfrimError('');
                        alert("Register Successful");
                        navigate('/');
                        reset();
                      
                      }
                     
                    
                 })} >
                    <input {...register('Email')} placeholder='Email' className='inputfield'  type='email'></input>
                    <p className="error" >{errors.Email?.message}</p> 
                    <input {...register('FirstName')} placeholder='firstName' className='inputfield'  type='text'></input>
                    <p className="error" >{errors.FirstName?.message}</p>  
                    <input {...register('LastName')} placeholder='lastName' className='inputfield'  type='text'></input>
                    <p className="error" >{errors.LastName?.message}</p>  
                    <input {...register('Password')} placeholder='Password' className='inputfield'type='password'></input>
                    <p className="error" >{errors.Password?.message}</p>  
                    <input {...register('ConfirmPassword')} placeholder='ConfirmPassword' className='inputfield'  type='Password'></input> 
                    {confirmError?
                      <p className="error" >Password mismatch</p>  
                    :''}
                    <a href='/'> Already Our Member ?? </a>
                    <button className='registerButton btn btn-success' type='submit'> Register</button>

                 </form>
        </div>

       </div>
      
    </>
  )
}

export default Register
