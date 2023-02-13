function Car(brand, color){
    this.brand = brand;
    this.color = color;
    this.drive = function (){
        console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중`);  
    }
}

let car = new Car('kia','black');
car.drive();

function ElecCar(brand, color, fuel) {
    Car.call(this, brand, color);
    this.fuel = fuel;

    this.drive = function (){
        console.log(`${this.brand}의 ${this.color}색 자동차가 ${this.fuel}의 원료로 주행`);
    }
}

ElecCar.prototype = Object.create(Car.prototype);
let elecCar = new ElecCar('tesla', 'white', 'electronic'); // 클래스의 extends 개념
elecCar.drive();

console.log(elecCar instanceof ElecCar);