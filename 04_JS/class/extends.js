class Car{
    constructor(brand, color){
        this.brand = brand;
        this.color = color;
    }
    showInfo(){
        console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
    }
}

// 상속
class ElecCar extends Car {
    constructor(brand, color, fuel){
        super(brand, color);
        this.fuel = fuel;
    }
    showInfo(){//overriding
        console.log(`${this.brand}브랜드의 ${this.color}색 ${this.fuel} 자동차가 주행 중입니다.`);
    }
}

const kia = new Car('kia','white');
kia.showInfo(); // Car

const elecCar = new ElecCar('tesla', 'black', 'electronic');
elecCar.showInfo(); // ElecCar