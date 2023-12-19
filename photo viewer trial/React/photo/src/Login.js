import React from 'react'
import { useForm } from 'react-hook-form';
import "./login.css"
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';

const schema=yup.object().shape({
    Email:yup.string().email().required("This field cannot be empty"), 
    Password:yup.string().min(5).required("This field cannot be empty")

})


function Login() {
    const {register,handleSubmit,reset,formState: {errors}}=useForm({
        resolver:yupResolver(schema)
         })


  return (
    <>
       <div className='w-75 mx-auto temp  row'>
        
          <div className='col-lg-6 loginrightside'> 
          <h2 className='text-center'>Welcome Back</h2>
             <img src='https://i.postimg.cc/gj8zTLVx/Work.jpg' className='w-75'></img>
          </div>
          <div className='col-lg-6'> 
                 <form className='inputformdata'onSubmit={handleSubmit(async(data)=>{

                 })} >
                    <input {...register('Email')} placeholder='Email' className='inputfield'  type='email'></input>
                    <p className="error" >{errors.Email?.message}</p> 
                    <input {...register('Password')} placeholder='Password' className='inputfield'  type='password'></input>
                    <p className="error" >{errors.Email?.message}</p> 
                   
                    <a href='register'> New Here?? </a>
                    <button className='registerButton btn btn-success' type='submit'> Login</button>

                 </form>
        </div>

       </div>
                

    </>
  )
}

export default Login
