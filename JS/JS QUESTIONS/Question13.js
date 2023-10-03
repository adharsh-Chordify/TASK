Palindrome=(str1)=>{
    let temp=(str1.split("").reverse().join(""));
    if(temp==str1){
        console.log("The given string is Palindrome");
    }
    else{
        console.log("The given string is not a Palindrome");
    }

    }





Palindrome("malayalam");