string=()=>{
    let str=prompt("Enter the string")
    try{
        alert(`Reverse of the string is ${str.split("").reverse().join()}`);
    }
    catch(error){
        alert(`The error is  ${error}`);
    }
    alert(`The type of the input is ${typeof(str)}`);
}

string()