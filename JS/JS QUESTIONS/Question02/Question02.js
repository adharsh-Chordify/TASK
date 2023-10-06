let input1=parseInt(prompt('Enter the First Value'))
let input2=parseInt(prompt('Enter the Second Value'))

sum=(input1,input2)=>{
    let total=0;
    total=input1+input2
    alert(`The output is ${total} `) 
}

console.log(sum(input1,input2));