const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filed');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelector('[data-skip]');
const range = document.querySelector('.player-slider');
function togglePlay () {
    const method = video.paused ? 'play' : 'pause';
    video[method]()
}
function updateButton () {
    const icon = this.paused ? 'P' : 'PLAY';
    toggle.textContent = icon;
 }
video.addEventListener('click', togglePlay);
toggle.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);