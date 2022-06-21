const playerWrapper = document.querySelector(".playerWrapperMinimized");
const expandMoreBtn = document.querySelector(".top-bar i");
const playPauseBtn = playerWrapper.querySelector(".play-pause");
const nextBtn = playerWrapper.querySelector("#next");
const prevBtn = playerWrapper.querySelector("#prev");
let interacted = false;

expandMoreBtn.addEventListener("click", () => {
    if(playerWrapper.classList.contains("playerWrapperMinimized")) {
        playerWrapper.classList.add("playerWrapper");
        playerWrapper.classList.remove("playerWrapperMinimized");
        playerWrapper.querySelector(".controls").style.display = 'none';
        expandMoreBtn.innerText = "expand_more";
    }
    else {
        playerWrapper.classList.add("playerWrapperMinimized");
        playerWrapper.classList.remove("playerWrapper");
        expandMoreBtn.innerText = "expand_less";
        playerWrapper.querySelector(".controls").style.display = 'inline';
    }
})

window.addEventListener('mousemove', e => {
    interacted = true;
    console.log(interacted);
})

let player;
// This code loads the IFrame Player API code asynchronously. This is the Youtube-recommended script loading method
let tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//  This function is called by YouTube once the the API is ready.It creates an &lt;iframe&gt; and sets up the video player inside.
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "260px",
    width: "380px",
    playerVars: {
        'playsinline': 1,
        'listType':"playlist",
        'list':"PL9LkJszkF_Z6bJ82689htd2wch-HVbzCO",
        'controls':1,
        'disablekb':1,
        'autoplay':0,
        'enablejsapi':1,
        'allow':'autoplay'
    },
    //videoId: "eVTXPUF4Oz4",
    events: {
      // API event handlers
      onReady: onPlayerReady,
      onStateChange: onStateChangeCallback
    }
  });
}
  // Player ready handler. Autoplay video when player is ready
function onPlayerReady(event) {
    console.log(event);
}

function onStateChangeCallback(event) {
    console.log(event.data);
    if(event.data === -1)
        player.playVideo();
}
  

function playMusic() {
    playerWrapper.classList.add("playing");
    playPauseBtn.querySelector("i").innerText = "pause";
    player.playVideo(); 
}

function pauseMusic() {
    playerWrapper.classList.remove("playing");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    player.pauseVideo();
}

function nextMusic() {
    player.nextVideo();
}

function prevMusic() {
    player.previousVideo();
}

playPauseBtn.addEventListener("click", () => {
    const isMusicPlaying = playerWrapper.classList.contains("playing");
    isMusicPlaying ? pauseMusic() : playMusic();
})

nextBtn.addEventListener("click", () => {
    nextMusic();
})

prevBtn.addEventListener("click", () => {
    prevMusic();
})
  
  
  
// Video state change handler.
function onPlayerStateChange(event) {
  
}

