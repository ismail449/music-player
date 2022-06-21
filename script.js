const audio = document.querySelector('audio')
const playButton = document.getElementById('play');
const previousButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let isPlaying = false;

//play music
const playMusic = ()=>{
  isPlaying = true;
  playButton.classList.replace('fa-play' ,'fa-pause')
  playButton.setAttribute('title', 'pause')
  audio.play()
  
}

//pause music
const pauseMusic = ()=>{
  isPlaying = false;
  playButton.classList.replace('fa-pause', 'fa-play')
  playButton.setAttribute('title', 'play')
  audio.pause()
}

const handlePlay = ()=>{
  if(isPlaying){
    pauseMusic()
    
  }else{
    playMusic()
    
  }
  
}

playButton.addEventListener('click', handlePlay)