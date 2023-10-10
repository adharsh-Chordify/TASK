function MyTemp() {
    const [name,setName]=React.useState("")
    const [age,setAge]=React.useState("")
    const [email,setEmail]=React.useState("")

   
    function temp(e) {
        
       e.preventDefault()

        setName(document.getElementById('name').value)
        setAge(document.getElementById('age').value)
        setEmail(document.getElementById('email').value)
      
        // alert(`The Entered Name is ${name} , the Entered Age is ${age} and the email id is ${setEmail}`)
        console.log(`The entered name is ${name}`);    
        console.log(`The entered age is ${age}`);   
        console.log(`The entered email is ${email}`);   
    }
    



    return (
        <div>
            

            <form className="formdata" >
                <div className="formback">
                    <h2 className="heading">React Form</h2>
                    <label>Enter Your Name</label>
                    <input id='name' type="text" placeholder="Enter the name" name="namedata"></input> <br></br>
                    <label>Enter Your Age</label>
                    <input id='age' type="text" placeholder="Enter your Age" name="agedata" ></input><br></br>
                    <label>Enter Your Email</label>
                    <input id='email' type="email" placeholder="Enter your Email" name="emaildata" ></input> <br></br>
                    <button className='buttonsub' type="submit" onClick={temp}>Click Here To Display</button>
                </div>
            </form>
            
              


        </div>


    )

    





}

const root = document.querySelector("#root")
const app2 = ReactDOM.createRoot(root)
app2.render(<MyTemp/>)






