const addBtn = document.querySelector(".input-btn"); // 추가 버튼
const todoList = document.querySelector(".todo-list"); // list
const inputTask = document.querySelector(".input-task"); // 추가할 내용

let inputField = inputTask.value;

console.log(inputField);




// if(check.checked==true){
//     li.
// }

addBtn.addEventListener("click" ,function(){
    const li = document.createElement("li");
    const check = document.createElement("input");
    const del = document.createElement("input");

    check.setAttribute("type", "checkbox");
    del.setAttribute("type", "button");
    del.setAttribute("value","삭제");
    
    if(inputTask.value===""){
        inputTask.placeholder="내용을 입력하세요";
    }else{
        todoList.append(li);
        li.appendChild(check);
        li.append(inputTask.value);
        li.appendChild(del);
    }    

    checkBtn.addEventListener("click", function () {
        if (checkBtn.checked === true) {
        checkBtn.parentNode.style.textDecoration = "line-through";
        } else {
        checkBtn.parentNode.style.textDecoration = "none";
        }
        });
})

function check(){

}

