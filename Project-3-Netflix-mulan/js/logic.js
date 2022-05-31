const trailer = document.querySelector('.trailer')
const play = document.querySelector('.play')
const close = document.querySelector('.close')
const video = document.querySelector('video')
play.addEventListener('click', toggleVideos)
close.addEventListener('click',toggleVideos)

function toggleVideos() {

     trailer.classList.toggle('active')
     video.currentTime = 0;
     video.pause()
}
