const img = document.querySelectorAll('.content__img img')
const content = document.querySelector('.content')
console.log(content);
const galleryImg = document.querySelector('.modal img ')
const modal = document.querySelector('.modal ')
var currentIndex = 0
console.log(galleryImg);
// console.log(img);
img.forEach( (item, index)=>{
  item.onclick = function() {
    currentIndex = index;
      showModel()
  }
})

function showModel() {
  galleryImg.setAttribute('src', img[currentIndex].src)
  content.classList.add('hide')
  modal.style.display = "flex";

 
}
document.addEventListener('keydown', (e) => {
	if (e.keyCode == 27) {
    content.classList.remove('hide')
    modal.style.display = "none"
  } 
  
})


