prime=()=>{
    let number=parseInt(prompt("Enter the number"))
    for(i=2;i<=number;i++){
        if(number%i==0){
            break;
        }
    }
    if(i==number){
        alert("The given number is prime");
    }
    else{
        alert("The given number is not a prime number");
    }
}

prime()