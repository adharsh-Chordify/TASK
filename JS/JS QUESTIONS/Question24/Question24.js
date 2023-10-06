

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
    console.log("Enter Your Choice 1)Circle 2)Square  3)Rectangle  4)Triangle");
   
     
    const input=parseInt(prompt("Enter Your Choice 1)Circle 2)Square  3)Rectangle  4)Triangle"))

    switch (input){
        case 1:
            const radius=parseInt(prompt("Enter the Radius"))
            alert(`The area of the circle is ${this.circle(radius)}`);
            break
        case 2:
            const side=parseInt(prompt("Enter the Side Of the Square"))
            alert(`THe area of the square is ${this.square(side)}`);
            break
        case 3:
            const length=parseInt(prompt("Enter the Length of the Rectangle"))
            const width=parseInt(prompt("Enter the width of the Rectangle"))
            alert(`The area of the Rectangle is ${this.rectangle(length,width)}`);
            break
        case 4:
            const base=parseInt(prompt("Enter the Base of the Triangle"))
            const height=parseInt(prompt("Enter the Heigth of the Triangle"))
            alert(`The area of the Triangle is ${this.triangle(base,height)}`);
            break
        default:
            alert("You Have Entered the Wrong Choice ,Please Select the values between 1 to 4");
            break

    }

   }
   
}


Myclass.main()