class Mathematicaloperation{
    

    additon(number1,number2){

        return number1+number2

    }
    subtraction(number1,number2){
        return number1-number2
    }
    multiplication(number1,number2){
        return number1*number2
    }
    division(number1,number2){
        return number1/number2
    }

}
const operations=new Mathematicaloperation()

maths=()=>{
    let num1=parseInt(prompt("Enter the first Number"))
    let num2=parseInt(prompt("Enter the second Number"))
    let condition=parseInt(prompt("Enter the condition"))

    switch(condition){
        case 1:
            alert('The added result is '+operations.additon(num1,num2));
            break;

        case 2:
            alert ('The Subtracted result is '+operations.subtraction(num1,num2));
            break;
        case 3:
            alert ('The Multiplied result is '+operations.multiplication(num1,num2));
            break;
        case 4:
            alert ('The Divided result is '+operations.division(num1,num2));
            break;
        default:
            alert ("PLease Select The Number Between 1 to 4");
    }

}

maths()