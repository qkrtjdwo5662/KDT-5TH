const header = document.querySelector("header");

// const video = document.querySelector("video");
// video.setAttribute("style","opacity: 0; transition: 10s" );

// // window.onload = function(){
// //     video.setAttribute("style","opacity: 0.5; transition: 5s" );
// // }

// video.addEventListener("play", function(){
//     console.log("재생 시작");
    
    
// })

// video.addEventListener("pause", function(){
//     console.log("재생 중단");
//     video.classList.add("hide");
//     header.classList.remove("hide");
// })


const modal = document.getElementById("modal")
const btnModal = document.getElementById("btn-modal")
btnModal.addEventListener("click", e => {
    modal.style.display = "flex"
})


const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
})