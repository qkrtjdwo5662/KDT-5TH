// 나머지 연산자
let num = Math.floor(Math.random()*10);

console.log(num);
console.log(num%2);

// 거듭 제곱
console.log(2**4);
console.log(Math.sqrt(4));

// 연산자 줄여 쓰기
let num2 = 5;
num2 = num2 + 5;
console.log("num2",num2);

let num3 = 5;
num3 += 5;
console.log("num3",num3);

let num4 = 5;
num4 *= 5;
console.log("num4",num4);

//증가 감소 연산자
let num5 = 10;
console.log("++num5", ++num5);
let num6 = 10;
console.log("num6++", num6++);
let num7 = 10;
console.log("num7+=1", num7+=1);

//비교 연산자
let a = 10;
let b = 5;

console.log(a==b); // 값만 비교
console.log(a===b); // 값과 형 모두 비교
console.log(a!=b); //일치하지 않는지
console.log(a==!b); 
console.log(a===!b); 

