function info(name, age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayInfo = function(){
        console.log(`내 이름은 ${this.name}요, 나이는 ${this.age}요, 성별은 ${this.gender}`);
    }
}

let user1 = new info('park',28, 'M');
console.log(user1);
user1.sayInfo();