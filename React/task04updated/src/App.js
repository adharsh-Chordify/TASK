
import { useForm } from 'react-hook-form';
import './App.css';
import { useEffect, useState } from 'react';
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

const schema=yup.object().shape({
  namedata:yup.string().required("This field cannot be empty"),
  agedata:yup.string().max(2).required("This field cannot be empty"),
  emaildata:yup.string().email().required("This field cannot be empty"),
  state:yup.string().required("This field cannot be Empty"),
  district:yup.string().required("This field cannot be Empty")

})

function App() {
  let States=["Kerala","TamilNadu","Karnataka"]
  let Districts={
     "Kerala":["Palakkad","Ernakulam","Thrissur"],
     "TamilNadu":["Chennai","Coimbatore","Tirupur"],
     "Karnataka":["Banglore","Kolar"]
 
  }

 

 
  const {register,handleSubmit,watch,formState: {errors}}=useForm({
 resolver:yupResolver(schema)
  })
  const[district,setDistrict]=useState()
  const[statevalue,setStatevalue]=useState('')
  const [Name,setName]=useState()
  const [Age,setAge]=useState()
  const [Email,setEmail]=useState()

 const temp=watch("state")

// console.log(errors);
// console.log(watch());
const handleChange =(e)=>{
  setStatevalue(e.target.value)
  console.log(district);
}

  return (
    <div className="App">
      <form className="formdata" onSubmit={handleSubmit((data)=>{
        
        // alert(data)
        setName(data.namedata);
        setAge(data.agedata);
        setEmail(data.emaildata);
        setStatevalue(data.state)
        setDistrict(data.district)
        console.log(data.district);
        // console.log(formdata.agedata);
        // console.log(formdata.namedata);
      })}  >
        <div className="formback">
          <h2 className="heading">React Form</h2>
          <label>Enter Your Name</label>
          <input {...register('namedata')} type="text" placeholder="Enter the name" id='name'></input> <br></br>
             <p className="error" >{errors.namedata?.message}</p>  
         
          
          <label>Enter Your Age</label>
          <input id='age' type="number"  placeholder="Enter your Age" {...register("agedata")} ></input><br></br>
         
            <p className="error" >{errors.agedata?.message}</p>  
         
          <label>Enter Your Email</label>
          <input id='email' type="email" placeholder="Enter your Email" {...register("emaildata")} ></input> <br></br>
          <p className="error" >{errors.emaildata?.message}</p>
           
          <label>Select Your State</label>
        <select className='district' {...register("state")}>
        <option  value={''}>Select Your State</option>
          {
            States.map(state=>{
            
             return <option>{state}</option>
            })
          }
        </select>
         
        <p className="error" >{errors.state?.message}</p>  

        <label>Select Your Districts</label>
        <select className='district' {...register('district')}>
          <option value={''}>Select Your District</option>
           {
            temp && Districts[temp].map(dist=>{
              return <option>{dist}</option>
            })
           }
        </select>

        <p className="error" >{errors.district?.message}</p>  

          <button className='buttonsub' type="submit"  >Click Here To Display</button>
        </div>

    

            
      </form>
  { Name?( 
     <div className='outputdiv'>
         <h2>The Entered Details Are</h2>
         <p className='outputp'>The Entered Name is {Name}</p>
         <p className='outputp'>The Entered Age is {Age}</p>
         <p className='outputp'>The Entered Email is {Email}</p>
         <p className='outputp'>The Selected Location is {district} , {statevalue} </p>
         
     </div>
):''}




    </div>




  )








}

export default App;
