incometax=(amount)=>{
    let taxamount
    if(amount<=250000){
        return taxamount="No Tax"
    }
    else if (amount>250000 && amount<=500000){
        return `The amount to paid as tax is ${ taxamount=amount*.05}`
    }
    else if (amount>500000 && amount<=1000000){
        return `The amount to paid as tax is ${ taxamount=amount*.2}`
    }
    else if(amount>1000000 && amount<=5000000){
       return `The amount to paid as tax is ${ taxamount=amount*.3}`
    }

}

console.log(incometax(1000000));

