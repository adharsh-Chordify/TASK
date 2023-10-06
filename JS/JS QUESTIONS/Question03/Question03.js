let input1=parseInt(prompt("Enter the Principal amount"))
let input2=parseInt(prompt("Enter the Rate of Interest"))
let input3=parseInt(prompt("Enter the Number of Years"))

Interest=(P,R,n)=>{
    let si=0;
    si=((P*R*n)/100)

    alert("The simple interest is "+si) 

}

console.log(Interest(input1,input2,input3));