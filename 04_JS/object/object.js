const park = {
    name:"park",
    age:28
}


console.log(park.name);
console.log(park['name']); // key값 문자열로 입력

park.gender = 'male'; // 추가
console.log(park.gender);

console.log(park.age); 
delete park.age; // 삭제
delete park['name']; // 삭제
console.log(park.age); // 삭제 완료
console.log(park['name']); // 삭제 완료
