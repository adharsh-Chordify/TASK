function MyTemp() {
    const [inputdata, setInputdata] = React.useState({
        namedata: '',
        agedata: 0,
        emaildata: ''
    })
    const [nameerror, setnameError] = React.useState(false)
    const [ageerror, setageError] = React.useState(false)
    const [emailerror, setemailError] = React.useState(false)

    const [submit, setSubmit] = React.useState(false)
    


    React.useEffect(() => {
       
      
    }, [nameerror,emailerror,ageerror])




    const finish = () => {
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        
        if(inputdata.agedata==''){
            alert('Please Enter the number as input')
        }
        else if(!emailRegex.test(inputdata.emaildata)){

            alert('invalid Mail')

        }
    
        else {
            alert(`The Entered Name is ${inputdata.namedata} . Age is ${inputdata.agedata} and the email is ${inputdata.emaildata}`);
            window.location.reload(true)
        }
       

    }
    const handlechange = (e) => {
        setInputdata({ ...inputdata, [e.target.name]: e.target.value })

    }


    function temp(e) {

        e.preventDefault();
        if (inputdata.namedata.length <= 0) {
            setnameError(true)     
        }
        else{
            setnameError(false)   
        }
        if (!inputdata.agedata ) {
            setageError(true)
            
        }
        else{
            setageError(false)   
        }
        if (inputdata.emaildata.length <= 0) {
            setemailError(true)
            
        }
        else{
            setemailError(false) 
        }
    
        if (!nameerror  && !ageerror && !emailerror ) {
            setSubmit(true)
            
        }
        // if(inputdata.namedata.length >= 0){
        //     setnameError(false)
        // }
        // if(inputdata.agedata==Number){
        //     setageError(false)
        // }
        // if(inputdata.emaildata.length >= 0){
        //     setemailError(false)
        // }
        if(submit=== true){
            finish()
        }
       
        
        
       
        
        console.log(submit);

        



    }
 




    return (
        <div>


            <form className="formdata"  >
                <div className="formback">
                    <h2 className="heading">React Form</h2>
                    <label>Enter Your Name</label>
                    <input id='name' type="text" placeholder="Enter the name" values={inputdata.namedata} name="namedata" onChange={handlechange}></input> <br></br>
                    {nameerror ? (
                        <p className="error">
                            The Name Filed Should Not Be Empty
                        </p>
                    )

                        : null}
                    <label>Enter Your Age</label>
                    <input id='age' type="number" maxLength='2'  placeholder="Enter your Age"  values={inputdata.agedata} onChange={handlechange} name="agedata" ></input><br></br>
                    {ageerror ? (
                        <p className="error">
                            The Age Filed Should Not Be Empty
                        </p>
                    )

                        : null}
                    <label>Enter Your Email</label>
                    <input id='email' type="email" placeholder="Enter your Email" values={inputdata.emaildata} onChange={handlechange} name="emaildata" ></input> <br></br>
                    {emailerror ? (
                        <p className="error">
                            The Email Filed Should Not Be Empty
                        </p>
                    )

                        : null}
                    <button className='buttonsub' type="submit" onClick={temp} >Click Here To Display</button>
                </div>
            </form>




        </div>




    )








}

const root = document.querySelector("#root")
const app2 = ReactDOM.createRoot(root)
app2.render(<MyTemp />)






