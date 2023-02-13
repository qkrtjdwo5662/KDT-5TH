let kdt = ['김은정','최지영','박성재','박성희','몰라'];

// 뒷단
kdt.push('추가됨');
console.log(kdt.pop());
console.log(kdt[kdt.length-1]);
console.log(kdt.length);

console.log("-------------");
//앞단
kdt.unshift("맨앞");
console.log(kdt.shift());
console.log(kdt[0]);
console.log(kdt.length);