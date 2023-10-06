
swap=()=>{
   let lengthofarray=parseInt(prompt("Enter the length of the array"))
let arr1=[];
let arr2=[]
for(i=0;i<lengthofarray;i++){
   let inp=parseInt(prompt("Enter the input to the array"))
   arr1.push(inp)
}
for(j=0;j<lengthofarray;j++){
   let inp1=parseInt(prompt("Enter the input for the second array"))
   arr2.push(inp1)
}

if(arr1.length>0 && arr2.length>0){
   let temp=arr1;
  arr1=arr2;
  arr2=temp;
 console.log("The First Array After Swapping is "+arr1 + " & The Second Array After Swapping is "+arr2); 
}
}



swap();


  


