function sayHello(){
    console.log(`hi my name is ${this.name}`);
}

const user = {
    name:"park",
    sayHello
}


const boy ={
    name:"mike",
    sayHello
}

const girl ={
    name:"min",
    sayHello
}

user.sayHello();
boy.sayHello();
girl.sayHello();