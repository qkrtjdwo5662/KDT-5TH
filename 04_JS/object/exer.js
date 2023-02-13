const pororo = {
    name:"뽀로로",
    age: 7,
    height: 200,
    weight: 30,
    // running : function(){
    //     console.log('함수1');
    // }
    running(){//위와 같음
        console.log('함수2')
    } ,
    pretty(){
        console.log("뽀로로 귀엽");
    }
}
// console.log(pororo['name']);
// console.log(pororo['age']);

// pororo['gender'] = 'M';
// console.log(pororo['gender']);

// pororo.height = 200;
// console.log(pororo.height);

// delete pororo['gender'];

// console.log(pororo);

console.log('name' in pororo);
console.log('gender' in pororo);


console.log(pororo.gender);
pororo['gender'] = 'M';
console.log('gender' in pororo);
console.log("")

// console.log("-----key-------");

// for (let key in pororo){
//     console.log(`key는 ${key}, key 안의 값은 ${pororo[key]}`);
// }

pororo.running();
pororo.pretty();