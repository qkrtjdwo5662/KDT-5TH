class Shape{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.height * this.width;
    }
}

class Rectangle extends Shape{
    constructor(width, height){
        super(width,height);
    }
    getArea(){
        return this.height * this.width;
    }
}

class Triangle extends Shape{
    constructor(width,height){
        super(width,height);
    }
    getArea(){
        return this.height * this.width/2;
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    getArea(){
        return this.radius * this.radius * 3.14;
    }
}

let shape = new Shape(4,4);
console.log(`일반도형의 넓이는 ${shape.getArea()}`);

let rect = new Rectangle(4,4);
console.log(`사각형의 넓이는 ${rect.getArea()}`);

let tri = new Triangle(3,4);
console.log(`삼각형 넓이 ${tri.getArea()}`);

let circle = new Circle(8);
console.log(circle.getArea());

