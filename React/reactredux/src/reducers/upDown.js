const initial=0
const changeTheNumber=(state=initial,action)=>{
    switch(action.type){
        case "INCREMENT":return state+ action.p;
        case "DECREMENT":return state - 1;
        default:return state
        } 
}
export default changeTheNumber