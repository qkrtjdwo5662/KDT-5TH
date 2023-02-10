function hello(){
    console.log("ㅎ2");
}

hello();

function returnFunc(){
    console.log('return');

    return 'return';
}

returnFunc();

let str = returnFunc();

console.log(str);

function sayHello(name){
    console.log('hello~',name);
}

sayHello("park");