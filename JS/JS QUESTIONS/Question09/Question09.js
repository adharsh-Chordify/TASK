let input1=parseInt(prompt("Enter The Number"))
pattern=(input)=>{
     
    for(let i=1;i<=input;i++){
       let string="";
        for(j=1;j<=i;j++){
           string+=j;
           
        }
        
        console.log(string);
    }

   
  

}
pattern(input1)