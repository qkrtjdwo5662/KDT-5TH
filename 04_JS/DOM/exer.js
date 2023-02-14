const result1 = document.querySelector(".orange");
console.log(result1);

const result2 = document.getElementById("skyblue");
console.log(result2);

const result3 = document.querySelector("ul>li:nth-child(2)")
result3.classList.add("orange");
console.log(result3);

const result4 = document.querySelector(".orange");
if(result4.classList.contains("orange")){
    result4.classList.remove("orange");
}