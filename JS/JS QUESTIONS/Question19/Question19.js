incometax=()=>{
    let amount=parseInt(prompt("Enter the Amount"))
    if(amount<=250000){
        alert("No Tax")
    }
    else if (amount>250000 && amount<=500000){
        alert(`The amount to paid as tax is ${ taxamount=amount*.05}`)
    }
    else if (amount>500000 && amount<=1000000){
        alert(`The amount to paid as tax is ${ taxamount=amount*.2}`)
    }
    else if(amount>1000000 && amount<=5000000){
       alert(`The amount to paid as tax is ${ taxamount=amount*.3}`)
    }

}

incometax();

