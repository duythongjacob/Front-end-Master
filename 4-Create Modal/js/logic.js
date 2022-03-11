const images = document.querySelectorAll('.wrapper .image img')
const gallery = document.querySelector('.gallery')
const galleryImg = document.querySelector('.gallery__inner img')

const close = document.querySelector('.gallery .close')
const next = document.querySelector('.control.next')
const prev = document.querySelector('.control.prev')
let currentIndex= 0 ;
images.forEach(function (img, index) {
    img.onclick = () => {
        currentIndex = index;
        showGallery();
    }
}
)

function showGallery() {
	currentIndex == images.length - 1
		? next.classList.add('hide')
		: next.classList.remove('hide')

	currentIndex == 0 ? prev.classList.add('hide') : prev.classList.remove('hide')

	gallery.classList.add('show');
	galleryImg.src = images[currentIndex].src
}
next.addEventListener('click', () =>{
    if (currentIndex < images.length -1) {
        currentIndex++;
        showGallery();
    }

} )
prev.addEventListener('click', () =>{
    if (currentIndex>0) {
        currentIndex--;
        showGallery();
    }
})
document.addEventListener('keydown', (e) => {
	if (e.keyCode == 27) gallery.classList.remove('show')
})
