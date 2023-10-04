function display(){
    const temp=prompt("Enter your value")
    console.log(temp);

    const temp2=document.getElementById('temp1')
    temp2.innerHTML=`The entered text is ${temp}`

}
display()


