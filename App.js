// window.addEventListener('load',() => {
//     const form = document.getElementById("new-task-form");
//     const input = document.querySelector("#new-task-input");
//     const list_el = document.getElementById("tasks");

//     form.addEventListener('submit',(e) => {
//         e.preventDefault();
//         const task = input.value;
//         if (!task) {
//             alert("please provide task");
//         }

//         const task_el = document.createElement("div");
//         task_el.classList.add("task");
//         const task_content_el = document.createElement("div");
//         task_content_el.classList.add("content");
//         task_content_el.innerText=task;
        
//         const task_input_el = document.createElement("input");
//         task_input_el.classList.add("text");
//         task_input_el.type="text";
//         task_input_el.value=task;
//         task_input_el.setAttribute("readonly","readonly");


//         task_el.appendChild(task_content_el);
//         task_content_el.appendChild(task_input_el);
//         list_el.appendChild(task_el);


//     })

// })

/* music container */

const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const cover = document.getElementById('cover');

// Song titles
let songs = ['blue-boi', 'purple-cat'];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  // title.innerText = song;
  audio.src = `music/${song}.mp3`;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

function changeMusicType(type) {
  console.log(type)
  if (type == 'cloud') {
    songs = ['midsommar', 'wistful-rain'];
    // const isPlaying = musicContainer.classList.contains('play');

    songIndex = 0;
    loadSong(songs[songIndex]);
    playSong();

  }
  else if (type == 'lofi') {
    songs = ['blue-boi', 'purple-cat'];
    songIndex = 0;
    loadSong(songs[songIndex]);
    playSong();
  }
}

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);
