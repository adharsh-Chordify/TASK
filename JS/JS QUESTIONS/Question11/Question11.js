
Evennumber=()=>{
    let arraylength=parseInt(prompt("Enter the length of the array"))
    let Array=[]
    if(arraylength>0){
        for(let i=0;i<arraylength;i++){
            let inp=parseInt(prompt("Enter the value to the array"))
            Array.push(inp)
        }
        let evennumbers=[];
        for (j of Array){
            if(j%2==0){
               evennumbers.push(j)
            }
        }
        alert (evennumbers)
    }
     

}
window.onload= Evennumber();

