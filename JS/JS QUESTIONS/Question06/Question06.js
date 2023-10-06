let input1=parseInt(prompt("Enter A Number between 1 to 7"))

Days=(t1)=>{
    let day;
   
      
        switch(t1){

            case 1:
                day="Sunday"
                break;
            case 2:
                day="Monday"
                break;
            case 3:
                day="Tuesday"
                break;
            case 4:
                day="Wednessday"
                break;
            case 5:
                day="Thursday"
                break;
            case 6:
                day="Friday"
                break;
            case 7:
                day="Saturday"
                break;
            default:
                day="Invalid Entry Please Enter the value Between 1 to 7"
                break;

        }
        alert("The selected day is "+day);

    }

    
    


Days(input1);

// Input
// Output
// 1
// Sunday
// 2
// Monday
// 3
// Tuesday
// 4
// Wednesday
// 5
// Thursday
// 6
// Friday
// 7
// Saturday
// Any other input
// Invalid Entry