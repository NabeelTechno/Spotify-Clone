
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay =document.getElementById('masterPlay');
let previous =document.getElementById('previous');
let next =document.getElementById('next');
let myProgressBar =document.getElementById('myProgressBar');





let songs = [
    { songName: "Ncs song one", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Ncs song two", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Ncs song three", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Ncs song four", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Ncs song five", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Ncs song six", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Ncs song seven", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Ncs song eight", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Ncs song nine", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Ncs song ten", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-play-circle');
    }
})

// audioElement.addEventListener('timeupdate', ()=>{
//     myProgressBar= masterPlay/audioElement*
// })