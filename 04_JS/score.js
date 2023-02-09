let mathScore = prompt("수학 점수를 입력 하세요");
let engScore = prompt("영어 점수를 입력 하세요");
mathScore = Number(mathScore);
engScore = Number(engScore);

let avg = (mathScore + engScore) / 2;
console.log(avg);
