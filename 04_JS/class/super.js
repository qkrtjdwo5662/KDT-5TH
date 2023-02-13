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
        super.showInfo();
        console.log(`그리고 이 차는 ${this.fuel} 연료를 사용합니다.`);
    }
    
}

const kia = new Car('kia','white');
kia.showInfo(); // Car

const elecCar = new ElecCar('tesla', 'black', 'electronic');
elecCar.showInfo(); // ElecCar


console.log(ElecCar instanceof Car);
console.log(Car instanceof ElecCar);

console.log(elecCar instanceof Car);