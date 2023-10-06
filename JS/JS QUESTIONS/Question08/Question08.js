let input1=parseInt(prompt("Enter the Number"))

SumOfOdd=(input)=>{
    let total=0;
    for(let i=1;i<=input;i++){
        if(i%2!=0){
            total+=i
        }
        
    }
    alert( "The Sum Of ODD Numbers in between 1 and " +input+ " are "+ total);
}
SumOfOdd(input1);