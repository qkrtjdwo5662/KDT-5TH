const header = document.querySelector("header");

const video = document.querySelector("video");
video.setAttribute("style","opacity: 0; transition: 3s" );

// window.onload = function(){
//     video.setAttribute("style","opacity: 0.5; transition: 5s" );
// }
video.addEventListener("play", function(){
    console.log("재생 시작");
    
    
})

video.addEventListener("pause", function(){
    console.log("재생 중단");
    video.classList.add("hide");
    header.classList.remove("hide");
})