function triangle(width, height){
    return width * height /2;
}
function circle(radius=3){
    return radius * radius* 3.14;
}
function pytha(a, b){
    return Math.sqrt(a**2+b**2);
}

console.log(triangle(4,4)); // 8
console.log(circle(7)); // 153.86
console.log(pytha(3,4)); // 5

let triangle2 = function(width,height){
    return width * height /2;
}

let tri3 = (width,height) =>{
    return width * height /2;
}

// let tri4 = (width, height) => return width * height/2; 리턴문 사용불가

let circle2 = function(radius){
    return radius * radius *3.14;
}

let circle = (radius) =>{
    return radius * radius *3.14;
}
let circle = (radius) => radius * radius *3.14;