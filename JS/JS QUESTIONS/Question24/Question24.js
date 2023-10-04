const prompt = require("prompt-sync")(); // Note the added () at the end

// Rest of your code remains the same

class Area {
   static circle(radius){
        return Math.PI*radius*radius
    }
    static square(side){
        return side*side
    }
    static rectangle(length,width){
        return length*width

    }
    static triangle(base,height){
        return 0.5*base*height
    }
}

class Myclass extends Area{
  static main(){
    console.log("Enter Your Choice");
    console.log("1:Circle");
    console.log("2:Square");
    console.log("3:Rectangle");
    console.log("4:Triangle");
     
    const input=parseInt(prompt("Enter Your Choice as Numbers"))

    switch (input){
        case 1:
            const radius=parseInt(prompt("Enter the Radius"))
            console.log(`The area of the circle is ${this.circle(radius)}`);
            break
        case 2:
            const side=parseInt(prompt("Enter the Side Of the Square"))
            console.log(`THe area of the square is ${this.square(side)}`);
            break
        case 3:
            const length=parseInt(prompt("Enter the Length of the Rectangle"))
            const width=parseInt(prompt("Enter the width of the Rectangle"))
            console.log(`The area of the Rectangle is ${this.rectangle(length,width)}`);
            break
        case 4:
            const base=parseInt(prompt("Enter the Base of the Triangle"))
            const height=parseInt(prompt("Enter the Heigth of the Triangle"))
            console.log(`The area of the Triangle is ${this.triangle(base,height)}`);
            break
        default:
            console.log("You Have Entered the Wrong Choice ,Please Select the values between 1 to 4");
            break

    }

   }
   
}


Myclass.main()