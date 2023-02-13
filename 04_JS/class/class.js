
console.log('생성자 함수 선언 전 -------');
const hyundai = new ConstructorCar('hyundai', 'black');
const kia = new ConstructorCar('kia', 'white');
hyundai.drive();
kia.drive();

function ConstructorCar(brand, color){
    this.brand = brand;
    this.color = color;
    this.drive = function() {
        console.log(`${this.brand}의 ${this.color} 색 자동차가 주행중`);
    }
}//생성자 함수

console.log('생성자 함수 선언 후 -------');
//const hyundai = new Car('hyundai', 'black');
//const kia = new Car('kia', 'white');
hyundai.drive();
kia.drive();


class ClassCar{
    constructor(brand, color){
        this.brand = brand;
        this.color = color;
    }
    drive() {
        console.log(`${this.brand} 브랜드의 차의 색 ${this.color}`);
    }
}

const porsche = new ClassCar('porsche', 'green');
porsche.drive();