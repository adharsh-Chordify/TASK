arraymultiply=()=>{
    let array=[];
    let newa;
    let newb
    let newaarray=[]
    let arraylen=parseInt(prompt("Enter the length of the array"))
    console.log(arraylen);
    for(j=0;j<arraylen;j++){
        newb=parseInt(prompt('Enter the value'))
        array.push(newb)
    }
    for(i=0;i<array.length-1;i++){
        newa=(array[i]* array[i+1])
        newaarray.push(newa)
       
    }
    alert("The multiplied array is "+ newaarray)

}
arraymultiply();