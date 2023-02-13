let sayHello = () => {
    console.log(`Hello, I'm ${this.name}`);
    console.log(this);
}

let sayHallo = function(){
    console.log(`Hello, I'm ${this.name}`);
    console.log(this);
}


const boy = {
    name:'mike',
    sayHello,
}
const girl = {
    name:'jane',
    sayHallo
}



boy.sayHello();
girl.sayHallo();