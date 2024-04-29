
const playButton = document.getElementById('play-button');

const audio = document.getElementById('myAudio');

playButton.addEventListener('click', function() {
    
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';

    } else {
        audio.pause();
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});
