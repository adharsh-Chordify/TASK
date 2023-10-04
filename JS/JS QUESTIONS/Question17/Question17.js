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

maths=(num1,num2,condition)=>{

    switch(condition){
        case 1:
            console.log('The added result is '+operations.additon(num1,num2));
            break;

        case 2:
            console.log ('The Subtracted result is '+operations.subtraction(num1,num2));
            break;
        case 3:
            console.log ('The Multiplied result is '+operations.multiplication(num1,num2));
            break;
        case 4:
            console.log ('The Divided result is '+operations.division(num1,num2));
            break;
        default:
            console.log("PLease Select The Number Between 1 to 4");
    }

}

maths(10,5,2)