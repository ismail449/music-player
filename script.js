const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const audio = document.querySelector('audio');

const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeElement = document.getElementById('curren-time');
const durationElement = document.getElementById('duration');
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
  playMusic();
};

const handleNext = () => {
  songIndex = (songIndex + 1) % musicData.length;
  loadSong(musicData[songIndex]);
  playMusic();
};

const handlePlay = () => {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
};

const updateProgressBar = (e) => {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    if (durationSeconds) {
      durationElement.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    if (currentSeconds) {
      currentTimeElement.textContent = `${currentMinutes}:${currentSeconds}`;
    }
  }
};

const setProgressBar =(e)=>{
  const {clientWidth} = e.srcElement;
  const clickX = e.offsetX;
  console.log("width", clientWidth)
  console.log("clickX", clickX)
}

const loadSong = (song) => {
  title.textContent = song.title;
  artist.textContent = song.artist;
  image.src = `img/${song.name}.jpg`;
  audio.src = `music/${song.name}.mp3`;
};

previousButton.addEventListener('click', handlePrevious);
playButton.addEventListener('click', handlePlay);
nextButton.addEventListener('click', handleNext);
audio.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar)

loadSong(musicData[songIndex]);
