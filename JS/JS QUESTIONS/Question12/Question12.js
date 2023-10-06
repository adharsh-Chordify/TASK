sorting=()=>{
    let array=[]
    let arraylength=parseInt(prompt("Enter the length of the array"))
    console.log(arraylength);
    if(arraylength>0){
        for(k=0;k<arraylength;k++){
            let inp1=parseInt(prompt("Enter the value each"));
            array.push(inp1)
        }
    for (i=0;i<array.length;i++){
        for(j=0;j<array.length;j++){
            if(array[j]<array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]]

            }
        }
    }
    console.log(array);
    alert(array); 


    }

   

}
sorting()
