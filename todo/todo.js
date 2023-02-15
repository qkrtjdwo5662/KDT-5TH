const addBtn = document.querySelector(".input-btn"); // 추가 버튼
const todoList = document.querySelector(".todo-list"); // list
const inputTask = document.querySelector(".input-task"); // 추가할 내용

let inputField = inputTask.value;

console.log(inputField);

function deleteTask(t){
    t.parentNode.remove();
}

function addList(){
    const li = document.createElement("li");
    const check = document.createElement("input");
    const delBtn = document.createElement("button");

    check.setAttribute("type", "checkbox");
    
    delBtn.textContent = "삭제";
    
    if(inputTask.value===""){
        inputTask.placeholder="내용을 입력하세요";
        return;
    }

    todoList.append(li);
    li.appendChild(check);
    li.append(inputTask.value);
    inputTask.value = "";
    li.appendChild(delBtn);   


    check.addEventListener("click", function(){
        if(check.checked===true){
            check.parentNode.style.textDecoration="line-through"; 
        } else{
            check.parentNode.style.textDecoration="none"; 
        }
    })

    // delBtn.addEventListener("click", function(e){
    //     e.target.parentNode.remove();
    // });
    delBtn.setAttribute("onclick", "deleteTask(this)");

}


addBtn.addEventListener("click" ,addList);


