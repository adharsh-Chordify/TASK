
Palindrome=()=>{
    let str1=prompt("Enter the String")
    // let temp=(str1.split("").reverse().join(""));
    // if(temp==str1){
    //     alert("The given string is Palindrome");
    // }
    // else{
    //     alert("The given string is not a Palindrome");
    // }
       let temp=''
    for(i=str1.length-1;i>=0;i--){
        temp+=str1[i]
    }
    if(temp==str1){
        alert("The given string is a plaindrome")
    }
    else{
        alert("The given string is not a palindrome ")
    }
    }






Palindrome();