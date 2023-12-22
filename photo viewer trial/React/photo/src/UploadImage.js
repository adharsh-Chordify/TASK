import React, { useContext, useEffect, useState } from 'react'
import instance from './baseUrl'
import { LoginDataContext } from './Contextshare'
const baseURL='http://localhost:4001'



function UploadImage() {

    const fileUpload=''
    
    const{loggedInData,setLoggedInData}=useContext(LoginDataContext)
    const [imgage,setImage]=useState()
    const [title,setTitle]=useState()
    const [preview,setPreview]=useState('')
    const [token,setToken]=useState('')

    useEffect(()=>{
      if(loggedInData){
          setToken(loggedInData.data.token)
          
      }
       


    },[loggedInData])


    const tokend='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNTQ1M2QxYWEtZjMzMC00NzRhLThjMjItZjgyMWQ2NTQ1N2FhIiwiaWF0IjoxNzAzMTY5MzMwLCJleHAiOjE3MDMxODAxMzB9.ZJyz0pj0nscwjfs1LblyVL1lpop-aPNYXgNZyGkG_OU'
    const uuid="5453d1aa-f330-474a-8c22-f821d65457aa"
    const formsubmit=async(e)=>{
         e.preventDefault()
         const formData=new FormData();
         formData.append("caption",title)
         formData.append('img',imgage)
        //  formData.append('token',token)
         formData.append('UUID',uuid)
        //  console.log(title,imgage);
         const fileUpload=await instance.post('/adddata',formData,{headers:{token}})
         console.log(fileUpload.data.image);
         setPreview(`${baseURL}/uploads/${fileUpload.data.image}`)
         console.log(preview);
    }
    useEffect(()=>{
      if(loggedInData){

      }
       


    },[loggedInData])

    useEffect(()=>{
    
    },[preview])
  return (
    <div>
        <form onSubmit={formsubmit}>
        <input type='text' placeholder='title' onChange={(e)=>setTitle(e.target.value)} ></input>
        <input type="file" id="img" name="img" accept="image/*"  onChange={(e)=>{setImage(e.target.files[0])}}/>
        <button type='submit'>Submit</button>
        </form>
        <img src={preview?preview:'https://i.postimg.cc/8CYTkmwF/Data-security-05.jpg'} ></img>
    </div>
  )
}

export default UploadImage
