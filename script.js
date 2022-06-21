const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const audio = document.querySelector('audio');
const progressContainer =  document.getElementById('progress-container')
const progress  = document.getElementById('progress')
const playButton = document.getElementById('play');
const previousButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let songIndex = 0;

//music data
const musicData = [
  {
    name: 'jacinto-1',
    artist: 'Jacinto Design',
    title: 'Electric Chill Machine',
  },
  {
    name: 'jacinto-2',
    artist: 'Jacinto Design',
    title: 'Seven Nation Army (Remix)',
  },
  {
    name: 'jacinto-3',
    artist: 'Jacinto Design',
    title: 'Goodhight, Disco Queen',
  },
  {
    name: 'metric-1',
    artist: 'Metric/Jacinto Design',
    title: 'Front Row (Remix)',
  },
];

let isPlaying = false;

//play music
const playMusic = () => {
  isPlaying = true;
  playButton.classList.replace('fa-play', 'fa-pause');
  playButton.setAttribute('title', 'pause');
  audio.play();
};

//pause music
const pauseMusic = () => {
  isPlaying = false;
  playButton.classList.replace('fa-pause', 'fa-play');
  playButton.setAttribute('title', 'play');
  audio.pause();
};

const handlePrevious = () => {
  if (songIndex === 0) {
    songIndex = musicData.length - 1;
  } else {
    songIndex = songIndex - 1;
  }
  loadSong(musicData[songIndex]);
  pauseMusic();
};

const handleNext = ()=>{
  songIndex = (songIndex + 1) % musicData.length;
  loadSong(musicData[songIndex]);
  pauseMusic();
}

const handlePlay = () => {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
};

const updateProgressBar = (e)=>{
  if(isPlaying){
    const { duration, currentTime } = e.srcElement
    console.log( duration/60, currentTime )
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%` 
  }
}

const loadSong = (song) => {
  title.textContent = song.title;
  artist.textContent = song.artist;
  image.src = `img/${song.name}.jpg`;
  audio.src = `music/${song.name}.mp3`;
};

previousButton.addEventListener('click', handlePrevious);
playButton.addEventListener('click', handlePlay);
nextButton.addEventListener('click', handleNext)
audio.addEventListener('timeupdate', updateProgressBar)

loadSong(musicData[songIndex]);
