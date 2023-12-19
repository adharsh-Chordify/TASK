import React from 'react'
import "./Register.css"

function Register() {
  return (
    <>
     <div className='w-75 mx-auto temp  row'>
          <div className='col-lg-6 loginrightside'> 
             <img src='https://i.postimg.cc/2ybRKTy7/Work-removebg-preview.png' className='w-75'></img>
          </div>
          <div className='col-lg-6'> 
                 <form className='inputformdata' >
                    <input placeholder='Email' className='inputfield' name='email' type='email'></input>
                    <input placeholder='firstName' className='inputfield' name='email' type='email'></input>
                    <input placeholder='lastName' className='inputfield' name='email' type='email'></input>
                    <input placeholder='Password' className='inputfield' name='email' type='email'></input>
                    <input placeholder='ConfirmPassword' className='inputfield' name='email' type='email'></input>
                    <a href=''> Already Our Member ?? </a>
                    <button className='registerButton btn btn-success' type='submit'> Register</button>

                 </form>
        </div>

       </div>
      
    </>
  )
}

export default Register
