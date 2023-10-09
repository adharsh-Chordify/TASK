// formvalidation=()=>{
//     var name=document.getElementById("nameinput")
//     let email=document.myform.email.value
//     let phone=document.myform.phone.value
//   alert(name);
//     if(name==''||name==null){
//        alert("Name Field is Required")
//     }
//     else{ 
//         let table=document.getElementById('table') //to access the table
//         let row=table.insertRow(-1)
//         let data=row.insertCell(2)
//         data.innerHTML=name

//     }
// }


// let table=document.getElementById('table') //to access the table
// let row=table.insertRow(-1)
//  let data=row.insertCell(0)
//  data.setAttribute('id','temp1')
// data.innerHTML=name
let valueupdate=4
let form=document.getElementById('myfor')

form.addEventListener("submit",(e)=>{
    e.preventDefault();
     let name=document.getElementById('nameinput').value
     let email=document.getElementById('emailinput').value
     let phone=document.getElementById('phoneinput').value
     let slno;
     
     if(name==''||name==null){
               alert("Name Field is Required")
         }
    else if(email=='' || email==null){
        alert("email Field is Required")
    }
    else if (phone==''||phone==null){
        alert("phone Field is Required")
    }
     else{
        let arr=[]
        
        localStorage.setItem(`Slno${valueupdate}`,slno)
        localStorage.setItem(`name${valueupdate}`,name)
        localStorage.setItem(`email${valueupdate}`,email)
        localStorage.setItem(`phone${valueupdate}`,phone)    
     }
     location.reload()
    
})

window.onload=table=()=>{
    let Slno=parseInt(localStorage.getItem(`Slno${valueupdate}`))
    let name1=localStorage.getItem(`name${valueupdate}`)
    let email1=localStorage.getItem(`email${valueupdate}`)
    let phone1=parseInt(localStorage.getItem(`phone${valueupdate}`))
    
    console.log(Slno);
    let table=document.getElementById('table') //to access the table
    let row=table.insertRow(0)
     let data=row.insertCell(0)
     let data1=row.insertCell(1)
     let data2=row.insertCell(2)
     let data3=row.insertCell(3)
     data.innerHTML=Slno
     data1.innerHTML=name1
     data2.innerHTML=email1
     data3.innerHTML=phone1
}