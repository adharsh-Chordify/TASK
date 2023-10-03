function myFilter(myArray){
    let sum=0;
    sum=myArray.reduce((a,b)=>a+b)
    if(sum%2==0){
        return true
    }
    else{
        return false
    }

}
function isEven(array){
    console.log(myFilter(array));
}

isEven([1,2,3,6])