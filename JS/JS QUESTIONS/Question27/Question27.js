height=()=>{
          
 try{    
    let value=parseInt(prompt("Enter the value"))
    if(isNaN(value)){
        throw new Error("Not a number");
    }
    else if (value>70){
         throw new Error("Huge Height Error");
    }
    else if (value<10){
        throw new Error ("Tiny Height Error");
    }
    else{
        alert(`The height is ${value}`);
    }
}
catch(error){
    alert(error.message)
}


}

height()