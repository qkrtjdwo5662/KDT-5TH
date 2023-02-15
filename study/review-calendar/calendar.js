const dateText = document.getElementById("date");
const contentText = document.getElementById("content");

let targetEl;

const calender = document.querySelector("table");

calender.addEventListener("click",function(e){
    targetEl = e.target;
    if(targetEl.tagName==="P" && targetEl.textContent!==""){
        dateText.value = `2023년 2월 ${targetEl.textContent}일`;
    }else if(targetEl.tagName==="TD" && targetEl.children[0].textContent!==""){
        dateText.value = `2023년 2월 ${targetEl.children[0].textContent}일`;
        targetEl = targetEl.children[0];
    }else{
        alert("선택 불가");
    }
    
})

function writeSchedule(){
    if(contentText.value===""){
        alert("내용없음");
        return;
    }
    const addDiv = document.createElement("div");
    targetEl.parentNode.append(addDiv);
    addDiv.textContent = contentText.value;
    contentText.value ="";

    addDiv.addEventListener("click",function(){
        addDiv.remove();
    })
}