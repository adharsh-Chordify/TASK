SumOfOdd=(input)=>{
    let total=0;
    for(let i=1;i<=input;i++){
        if(i%2!=0){
            total+=i
        }
        
    }
    return "The Sum Of ODD Numbers are "+ total;
}
console.log(SumOfOdd(3));