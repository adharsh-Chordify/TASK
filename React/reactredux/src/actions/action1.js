export const incNumber=(num)=>{
    return{
        type:"INCREMENT",
        p:num
    }
   
}

export const decNumber=()=>{
   return{
    type:"DECREMENT"
   }
}