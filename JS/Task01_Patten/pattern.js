

document.write("HEY WHATS UP???  </br>" )



let a='';
let rows = 5;

pattern=()=>{


    for(i=1;i<=rows;i++){
        
       
        for(j=1;j<=i;j++){
            a+=i;
        }
        a+="</br>";
        
    }
    document.write(a);
    
    
}


pattern();
