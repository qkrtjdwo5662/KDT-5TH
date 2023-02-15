const addBtn = document.querySelector(".input-btn"); // todo 입력 버튼

const todoList = document.querySelector(".todo-list"); // todo list

const inputTask = document.querySelector(".input-task"); //todo textField


addBtn.addEventListener("click",function(){

    if(inputTask.value==""){
        alert("내용을 입력하세요");
        return;
    }
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type","checkbox");
    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";

    todoList.append(li);
    li.append(checkBox);
    li.append(inputTask.value);
    li.append(delBtn);
    inputTask.value ="";

    checkBox.addEventListener("click",function(){
        if(checkBox.checked){
            console.log(checkBox.parentNode); // 1번
            console.log(li); // 2번

            li.style.textDecoration = "line-through";
        }else{
            checkBox.parentNode.style.textDecoration = "none";
        }
    })
   
    delBtn.addEventListener("click",deleteList);
})

function deleteList(e){
    //console.log(e.target.parentNode);
    e.target.parentNode.remove();
}
