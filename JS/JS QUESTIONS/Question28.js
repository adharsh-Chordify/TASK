 function Car(name,mileage,maxspeed){
    this.name=name
    this.mileage=mileage
    this.maxpspeed=maxspeed

}

carDetail = new Car("Glanza",18,140)

console.log(`The car Name is ${carDetail.name}`);
console.log(`The car Mileage is ${carDetail.mileage}`);
console.log(`The car Maxspeed is ${carDetail.maxpspeed}`);
