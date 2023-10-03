sumoffArray=(array1,array2)=>{
        let rows=array1.length;
        let cols=array1[0].length;
         let total=[];
         
         for(i=0;i<rows;i++){
            let newArray=[]
            for(j=0;j<cols;j++){
                newArray.push(array1[i][j]+array2[i][j])
                
            }
            total.push(newArray)
         }
         return total
        

}

console.log(sumoffArray([[1,2,3],[4,5,6],[7,8,9]],[[10,20,30],[40,50,60],[70,80,90]]));