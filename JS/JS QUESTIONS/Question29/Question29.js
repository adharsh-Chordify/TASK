function myFilter(myArray){
    let sum=0;
    for(i of myArray){
        sum+=i
    }
    if(sum%2==0){
        alert( `The sum value is ${sum} so it is ${true}`)
        }
    else{
        alert(`The sum value is ${sum} so it is ${false}`)
    }

}
function isEven(){
    let array=[]
    let length=parseInt(prompt("Enter the Length Of The Array"))
    for(i=0;i<length;i++){
        let temp=parseInt(prompt("Enter the value"));
        array.push(temp)
    }
    if(array){
        myFilter(array);
    }
  
}

isEven();