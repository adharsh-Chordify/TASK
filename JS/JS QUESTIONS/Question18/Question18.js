score=()=>{
    let Written=parseInt(prompt("Enter the marks for the Written"))
    let Lab=parseInt(prompt("Enter the marks for the Lab exams"))
    let Assignments=parseInt(prompt("Enter the marks for the Assignments"))
    let overall=0;
    
    overall=((Written*70)/100)+((Lab*20)/100)+((Assignments*10)/100);
    alert("The overall result is  "+overall) 

}

score();