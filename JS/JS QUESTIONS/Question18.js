score=(Written,Lab,Assignments)=>{
    let overall=0;
    
    overall=((Written*70)/100)+((Lab*20)/100)+((Assignments*10)/100);
    return overall

}

console.log(score(81,68,92));