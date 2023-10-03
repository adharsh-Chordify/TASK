swap=(arr1,arr2)=>{
     let temp=arr1;
    arr1=arr2;
    arr2=temp;
   console.log("The First Array After Swapping is "+arr1 + " & The Second Array After Swapping is "+arr2); 
}

swap([1,2,3],[4,5,6]);