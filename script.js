let songIndex=0;


let audioElement = new Audio('song/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgessBar = document.getElementById('myProgessBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Dhokha" , filePath: "song/1.mp3" , coverPath: "cover/1.png"},
    {songName: "Dil Galti Kar Baitha hai" , filePath: "song/2.mp3" , coverPath: "cover/2.jpeg"},
    {songName: "Kesariya" , filePath: "song/3.mp3" , coverPath: "cover/1.png"},
    {songName: "Manike" , filePath: "song/4.mp3" , coverPath: "cover/2.jpeg"},
    {songName: "Tu man meri jaan" , filePath: "song/5.mp3" , coverPath: "cover/1.png"},
    {songName: "Garmi" , filePath: "song/6.mp3" , coverPath: "cover/2.jpeg"},
    
    
]
songItem.forEach((element,i) =>{

element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})


audioElement.addEventListener('timeupdate', () =>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgessBar.value=progress;
})

myProgessBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgessBar.value * audioElement.duration/100;
})


const makeALLPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       console.log(e.target);
       makeALLPlays();
       
       songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})