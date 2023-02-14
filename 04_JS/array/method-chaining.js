let helloTest = "H-e-l-l-o";
let helloTestArr1 = helloTest.split("-"); // "-" 를 기준으로 문자열을 잘라서 배열로 return
let helloTestArr2 = helloTest.split("");
let helloTestArr3 = helloTest.split("l");
console.log(helloTestArr1);
console.log(helloTestArr2);
console.log(helloTestArr3);

console.log("---------------------------------");
let helloStr1 = helloTestArr1.join(""); // "" 문자를 합쳐서 리턴
let helloStr2 = helloTestArr1.join("*");
console.log(helloStr1);
console.log(helloStr2);

console.log("---------------------------------");
let reverseHelloTestArr = helloTestArr1.reverse();
console.log(reverseHelloTestArr);

console.log("---------------------------------");
let finalStr = helloTest.split("-").reverse().join(""); // method chaining
console.log(finalStr);

console.log("---------------------------------");
const obj = {
    arr: ['a','b','c'],
    number: 10
}

let testStr = obj.arr.reverse().join("");
console.log(testStr);

