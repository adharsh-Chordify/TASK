Evennumber=(Array)=>{
         let evennumbers=[];
    for (i of Array){
        if(i%2==0){
           evennumbers.push(i)
        }
    }
    return evennumbers

}

console.log(Evennumber([1,2,3,4,5,6]));