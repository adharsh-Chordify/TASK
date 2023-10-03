arraymultiply=(array)=>{
    let newa;
    let newaarray=[]

    for(i=0;i<array.length-1;i++){
        newa=(array[i]* array[i+1])
        newaarray.push(newa)
       
    }
    return newaarray

}
console.log(arraymultiply([1,2,3,4,5]));