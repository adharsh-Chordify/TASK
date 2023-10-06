let input1=parseInt(prompt("Enter Your Marks"))

Grade=(mark)=>{
      
    if(mark>=0 && mark<=100){
        if(mark>=90){
            alert("The Grade is A")
        }
        else if(mark<=89 && mark>=80){
            alert("The Grade is B")
        } 
        else if(mark<=79 && mark>=70){
            alert("The Grade is C")
        } 
        else if(mark<=69 && mark>=60){
            alert("The Grade is D")
        } 
        else if(mark<=59 && mark>=50){
            alert("The Grade is E")
        } 
        else{
            alert("Failed")
        }

    }
    else{
        alert("Please Enter The Marks Ranges Between 0-100")
    }
   

}

Grade(input1);