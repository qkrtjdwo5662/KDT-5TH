function original(){
    return 'original';
}

let original2 = function() {
    return 'original2'
}

let test1 = () => {
    return 'test1';
}

let test2 = () => 'test2'; 

console.log(original());
console.log(original2());
console.log(test1());
console.log(test2());


let sum2 = function(a,b){
    return a+b;
}
let sum3 =()=>{
    return a+b;
}
let sum4 =()=> a+b;