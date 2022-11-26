console.log('Welcome to spotify');
let songsItems = Array.from(document.getElementsByClassName("songItem"));

let songLi = [{ songName: "Let me love you", pathName: "songs/Let.mp3", coverPath:"covers/cv1.png"},
{ songName: "Track 2", pathName: "songs/1.mp3" , coverPath:"covers/cv2.png"},
{ songName: "Track 3", pathName: "songs/2.mp3" , coverPath:"covers/cv3.png"},
{ songName: "Track 4", pathName: "songs/3.mp3" , coverPath:"covers/cv4.png"},
{ songName: "Track 5", pathName: "songs/4.mp3" , coverPath:"covers/cv5.png" },
{ songName: "Track 6", pathName: "songs/5.mp3" , coverPath:"covers/cv6.png"},
{ songName: "Track 7", pathName: "songs/6.mp3" , coverPath:"covers/cv7.png"},
{ songName: "Track 8", pathName: "songs/7.mp3" , coverPath:"covers/cv8.png"},
{ songName: "Track 9", pathName: "songs/8.mp3" , coverPath:"covers/cv9.png"},
{ songName: "Track 10", pathName: "songs/9.mp3" , coverPath:"covers/cv10.png"},
    
];
songsItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songLi[i].coverPath;

    
})
//INITIALIZE VARIABLES
let audioElement = new Audio("songs/0.mp3");
let Index = 0;
let bigPlaybutton = document.getElementById("playpause");
let seekBar = document.querySelector("#myProgressBar");
let forwardButton = document.querySelector(".fa-forward");
let backwardButton = document.querySelector(".fa-backward");
let giff = document.getElementById("gif");
let txtt = document.getElementById("txt");

//PLAY/PAUSE

bigPlaybutton.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        bigPlaybutton.classList.remove("fa-circle-play");
        bigPlaybutton.classList.add("fa-circle-pause");
        giff.style.opacity = 1;
    }   
    else {
        audioElement.pause();
        bigPlaybutton.classList.remove("fa-circle-pause");
        bigPlaybutton.classList.add("fa-circle-play");
        giff.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    seekBar.value = progress;
})

seekBar.addEventListener('change', () => {
    audioElement.currentTime = (seekBar.value*audioElement.duration)/100;
})
makeallPlay = ()=> {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
           element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');  
    })
        
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeallPlay();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        index = parseInt(e.target.id);
        audioElement.src = `songs/${index}.mp3`;
        audioElement.play();
        txtt.innerText = songLi[index].songName;
        giff.style.opacity = 1;
        audioElement.currentTime = 0;
        bigPlaybutton.classList.remove("fa-circle-play");
        bigPlaybutton.classList.add("fa-circle-pause");
    })
})   

document.getElementById('back').addEventListener('click', () => {
    if (index <= 0) {
        index = 9;
    }
    else {
        index -= 1;
    }
    audioElement.src = `songs/${index}.mp3`;
    audioElement.play();
    txtt.innerText = songLi[index].songName;
    giff.style.opacity = 1;
    audioElement.currentTime = 0;
    bigPlaybutton.classList.remove("fa-circle-play");
    bigPlaybutton.classList.add("fa-circle-pause");
})

document.getElementById('next').addEventListener('click', () => {
    if (index >=9) {
        index = 0;
    }
    else {
        index += 1;
    }
    audioElement.src = `songs/${index}.mp3`;
    audioElement.play();
    txtt.innerText = songLi[index].songName;
    giff.style.opacity = 1;
    audioElement.currentTime = 0;
    bigPlaybutton.classList.remove("fa-circle-play");
    bigPlaybutton.classList.add("fa-circle-pause");
})


