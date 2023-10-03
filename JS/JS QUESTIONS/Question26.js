string=(str)=>{
    try{
        console.log(`Reverse of the string is ${str.split("").reverse().join()}`);
    }
    catch(error){
        console.log(`The error is  ${error}`);
    }
    console.log(`The type of the string is ${typeof(str)}`);
}

string(123)