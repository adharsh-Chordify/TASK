
Grade=(mark)=>{
       let TotalMark
    if(mark>=0 && mark<=100){
        if(mark>=90){
            TotalMark="The Grade is A"
        }
        else if(mark<=89 && mark>=80){
            TotalMark="The Grade is B"
        } 
        else if(mark<=79 && mark>=70){
            TotalMark="The Grade is C"
        } 
        else if(mark<=69 && mark>=60){
            TotalMark="The Grade is D"
        } 
        else if(mark<=59 && mark>=50){
            TotalMark="The Grade is E"
        } 
        else{
            TotalMark="Failed"
        }

    }
    else{
        TotalMark="Please Enter The Marks Ranges Between 0-100"
    }
    return TotalMark

}

console.log(Grade(-1));