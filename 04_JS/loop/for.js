//기본 반복문
//for (초기화식; 조건식; 증감식)

let maxx =0; //최대공약수
let minn =0; //최소공배수
let a = 2;
let b = 5;
let result=0;
for(let i=Math.min(a,b); i<=100; i++){
    if(i%a==0 || i%b==0){
        result = result + i;
    }
}

console.log(result);

