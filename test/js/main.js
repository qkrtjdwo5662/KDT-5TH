const header = document.querySelector("header");


const modal = document.getElementById("modal")
const btnModal = document.getElementById("btn-modal")

const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const audioConatiner = document.getElementById("audio-container");


btnModal.addEventListener("click", e => {
    modal.style.display = "flex"
    document.querySelector("body").style.backgroundColor="rgba(8,8,8,0.75)";
    audioConatiner.classList.remove("hidden");
})

const closeBtn = modal.querySelector(".close-area");
closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
    document.querySelector("body").style.backgroundColor="";
    audioConatiner.classList.add("hidden");
})


const playBtn = document.querySelector(".play");

const audio = document.createElement("audio");
playBtn.addEventListener("click",function(e){
    // console.log("play");
    
    console.log(playBtn.parentNode.parentNode);
    audio.setAttribute("src", "./js/cardio.mp3");
    audio.setAttribute("loop", "loop");
    playBtn.parentNode.parentNode.append(audio);
    audio.addEventListener("timeupdate", updateProgress);
    audio.play();

})

const pauseBtn = document.querySelector(".pause");
pauseBtn.addEventListener("click", function(){
    audio.pause();
})
function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPer = (currentTime / duration) * 100;
    
    progress.style.width = `${progressPer}%`;
}
function changeProgress(e){
    const width = e.target.clientWidth;
    const offsetx = e.target.offsetx;
    const duration = audio.duration;
    audio.currentTime = (offsetx / width) * duration;
}

progressContainer.addEventListener("click",changeProgress);