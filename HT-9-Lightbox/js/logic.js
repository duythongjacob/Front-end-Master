const img = document.querySelectorAll('.content__img img')
const content = document.querySelector('.content')
const galleryImg = document.querySelector('.modal img ')
const modal = document.querySelector('.modal img ')
console.log(  modal.parentNode);
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
  
  modal.style.display = "flex";
  modal.parentNode.querySelector('span').style.display = "block"
 
}
document.addEventListener('keydown', (e) => {
	if (e.keyCode == 27) {
 
    modal.style.display = "none"
    modal.parentNode.querySelector('span').style.display = "none"
    
  } 
  
})


