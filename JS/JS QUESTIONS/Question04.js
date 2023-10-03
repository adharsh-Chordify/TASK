result=(mark)=>{
    if(mark>=0 && mark<=100){
        if(mark>=50){
            console.log("Student is Passed")
        }
        else{
            console.log("Student is Failed");
        }
        
    }
    else{
        console.log("Mark is out of Range Please Enter The Marks between 0 to 100");
    }
   
}

result(-1);