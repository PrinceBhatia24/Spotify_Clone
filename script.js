console.log("Welcome to spotify");
// audioElement.play();

//Initialize the elements
let songIndex = 0;
let audioElement = new Audio("songs/10.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  { songName: "Song1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
  { songName: "Song2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
  { songName: "Song3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
  { songName: "Song4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
  { songName: "Song5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
  { songName: "Song6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
  { songName: "Song7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
  { songName: "Song8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
  { songName: "Song9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
  { songName: "Song10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
];
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//Handle play/pause Click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

//Listen the event
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach(
      (element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
      });
  }
  

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays(); 
        songIndex=parseInt(e.target.id)
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        masterSongName.innerHTML=songs[songIndex].songName
      audioElement.src=`songs/${songIndex+1}.mp3`
      audioElement,currentTime=0
      audioElement.play()
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  });

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex +=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterSongName.innerHTML=songs[songIndex].songName
    audioElement,currentTime=0
    audioElement.play()
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterSongName.innerHTML=songs[songIndex].songName
    audioElement,currentTime=0
    audioElement.play()
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})
