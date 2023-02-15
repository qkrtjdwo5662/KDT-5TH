// JS 구현
const calendar = document.querySelector("table"); //달력
const day = calendar.querySelector("p");
const date = document.querySelector("#date"); //날짜
const todoContent = document.getElementById("content");

// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;


function calendarTask(e){
    targetEl = e.target;
    console.log(targetEl);
    console.log(targetEl.textContent.length);
    if(targetEl.tagName==="P"){
        date.value = `2023-2-${targetEl.textContent}`;
    } else if(targetEl.tagName=="TD"){
        date.value = `2023-2-${targetEl.children[0].textContent}`;
        targetEl = targetEl.children[0];
    }else if(targetEl.textContent.length==0){
        console.log("걸림");
        alert("선택불가");
    }
}

calendar.addEventListener("click", calendarTask);



function writeSchedule(){
    if(todoContent.value===""){
        alert("내용을 입력하세요");
        return;
    }
    const div = document.createElement("div");
    //div.setAttribute("onclick","deleteSchedule(this)");
    div.textContent = todoContent.value;
    const parent = targetEl.parentNode;
    parent.append(div);
    todoContent.value = "";

    div.addEventListener("click",function(e){
    
        if(confirm("삭제하시겠습니까?")){
            e.target.remove();
            return;
        }
        
    })

}

// function deleteSchedule(e){
//     e.remove();
// }

