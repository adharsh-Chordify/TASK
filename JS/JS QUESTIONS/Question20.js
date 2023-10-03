
pattern=(num1)=>{
     temp=1
    for(i=1;i<=num1;i++){
        let string=''
        for(j=1;j<=i;j++){
            string+=temp
            temp++
            
        }
        console.log(string);
       

    }
}

pattern(4)
