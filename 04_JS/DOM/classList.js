const boxEl = document.querySelector(".box"); // class="box"

boxEl.classList.add("orange"); // orange 클래스 추가 // class="box orange"

const thirdBoxEl = document.getElementById("box");
thirdBoxEl.classList.remove("box");

console.log(boxEl.classList.contains("box"));
console.log(thirdBoxEl.classList.contains("box"));