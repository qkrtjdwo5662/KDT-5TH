const park ={
    name:'park',
    email:'qkrtjdwo5662@naver.com'
}

const seong ={
    name:'park',
    email:'qkrtjdwo5662@naver.com'
}

console.log(park === seong); 
// false
// 원시 타입이 아닌 비원시 타입에서는 
// 단순 값을 비교하는 것이 아닌 메모리 주소를 비교하므로

console.log("");
//-------------------
const parkCopy = park;
parkCopy.name="copy";

console.log(park);
console.log(parkCopy);
//같은 메모리 값을 공유함(공유한다는 것은 같은 메모리 공간을 가르킨다)


console.log(JSON.stringify(park)===JSON.stringify(seong))