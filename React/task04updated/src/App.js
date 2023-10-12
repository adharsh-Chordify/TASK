
import { useForm } from 'react-hook-form';
import './App.css';
import { useState } from 'react';

function App() {

  const {register,handleSubmit,formState: {errors}}=useForm({
    defaultValues:{
      namedata:'',
      agedata:'',
      emaildata:''
    }
  })
  const [Name,setName]=useState()
  const [Age,setAge]=useState()
  const [Email,setEmail]=useState()

// console.log(errors);
// console.log(watch());


  return (
    <div className="App">
      <form className="formdata" onSubmit={handleSubmit((data)=>{
        
        // alert(data)
        setName(data.namedata);
        setAge(data.agedata);
        setEmail(data.emaildata);
        // console.log(formdata.agedata);
        // console.log(formdata.namedata);
      })}  >
        <div className="formback">
          <h2 className="heading">React Form</h2>
          <label>Enter Your Name</label>
          <input {...register('namedata',{required:"This field cannot be empty"})} type="text" placeholder="Enter the name" id='name'></input> <br></br>
             <p className="error" >{errors.namedata?.message}</p>  
         
          
          <label>Enter Your Age</label>
          <input id='age' type="number"  placeholder="Enter your Age" {...register("agedata",{required:"This field cannot be empty",maxLength:{
            value:2,message:"Minimum input is 2 Numbers" 
          }})} ></input><br></br>
         
            <p className="error" >{errors.agedata?.message}</p>  
         
          <label>Enter Your Email</label>
          <input id='email' type="email" placeholder="Enter your Email" {...register("emaildata",{required:"This field cannot be empty"})} ></input> <br></br>
          <p className="error" >{errors.emaildata?.message}</p>  
          <button className='buttonsub' type="submit"  >Click Here To Display</button>
        </div>
            
      </form>
  { Name?( 
     <div className='outputdiv'>
         <h2>The Entered Details Are</h2>
         <p className='outputp'>The Entered Name is {Name}</p>
         <p className='outputp'>The Entered Age is {Age}</p>
         <p className='outputp'>The Entered Email is {Email}</p>
     </div>
):''}




    </div>




  )








}

export default App;
