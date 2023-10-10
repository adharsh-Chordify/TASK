
function FirstData(){
  let[name,setname]=React.useState("Click The button To Display the Name")
  let data="Adharsh"
  return(
     
    <div>
        <h2>The Name is {name}</h2>
        <button onClick={()=> setname(data)}>Click Here</button>
    </div>
    
  )

  
}












const root=document.querySelector('#root');
const app1=ReactDOM.createRoot(root);
app1.render(<FirstData/>)


