prime=(number)=>{
    for(i=2;i<=number;i++){
        if(number%i==0){
            break;
        }
    }
    if(i==number){
        console.log("The given number is prime");
    }
    else{
        console.log("The given number is not a prime number");
    }
}

prime(9)