let input1=parseInt(prompt("Enter Your Marks"))

result=(mark)=>{
    if(mark>=0 && mark<=100){
        if(mark>=50){
            alert("Student is Passed")
        }
        else{
            alert("Student is Failed");
        }
        
    }
    else{
        alert("Mark is out of Range Please Enter The Marks between 0 to 100");
    }
   
}

result(input1);