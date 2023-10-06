let input1=parseInt(prompt("Enter the Number"))

multiply=(input)=>{
    let total=input;
    for(let j=1;j<=10;j++){
        total=input*j
        console.log(j +"x"+ input +"=" + total);
    }
    

}
multiply(input1);