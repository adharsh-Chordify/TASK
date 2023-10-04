height=(value)=>{
 
       if(isNaN(value)){
        throw new Error("Not a number");
    }
    else if (value>70){
         console.error("Huge Height Error");
    }
    else if (value<10){
         console.error ("Tiny Height Error");
    }
    else{
        console.log(`The height is ${value}`);
    }


}

height(8)