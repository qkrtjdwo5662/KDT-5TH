function Kdt(name, gender){
    this.name = name;
    this.gender = gender;
    this.showInfo = function(){
        console.log(`이름은 ${this.name}, 성별은 ${this.gender}`);
   }
}

let mate = new Kdt('박성희', 'F');
let sameline1 = new Kdt('김은정', 'F');
let sameline2 = new Kdt('최지영', 'F');
let sameline3 = new Kdt('박성희', 'F');
let sameline4 = new Kdt('이름모름', 'M');

mate.showInfo();
sameline1.showInfo();
sameline2.showInfo();
sameline3.showInfo();
sameline4.showInfo();

const test = {
    name:"dd"
}

console.log(typeof(test));