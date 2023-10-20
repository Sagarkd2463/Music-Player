//getting all the references
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

//setting progress bar (i.e. range) value and its duration to know its current time
song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

//toggling between play and pause 
function playPause() {
    if(ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

//making progress bar move by 500 milliseconds with the current time of the song
if(song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

//changing position of progress bar by user by increasing or decreasing the duration of the song 
progress.onchange = () => {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}