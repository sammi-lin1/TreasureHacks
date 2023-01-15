// Create a "close" button and append it to each list ite
// closeBtn = document.createElement("button");
// closeBtn.appendChild(document.createTextNode('Del'))
// // loop through ul li items and add btn child to each li
// taskList = document.querySelector("#myUL").getElementsByTagName("li");
// alert(taskList.values)


// function to add new task
function newElement(){
    var li = document.createElement("li");
    var userInput = document.querySelector("#myInput").value;
    
    var text = document.createTextNode(userInput);
    li.appendChild(text); // add text to li
     // add li to ul
    if (userInput == ''){
        alert("You must provide a task");
        return;
    }
    document.querySelector("#myUL").appendChild(li)
    // clear text field
    document.getElementById("myInput").value ='';

    // to each li -> add child that is a button
    var deleteBtn = document.createElement("button");
    // add text to button
    var btnText = document.createTextNode("Done!");
    deleteBtn.appendChild(btnText);
    // give class to button
    deleteBtn.classList.add("deleteBtn");
    // add delete button to li
    li.appendChild(deleteBtn);
    
    // add event listener to button
    deleteBtn.addEventListener("click", function(){
        this.parentNode.remove();
    });



}

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
