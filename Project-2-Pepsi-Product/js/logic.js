const img = document.querySelector('.pesi1')
const imgs = document.querySelectorAll('.thumb li img')
const imgsLength = imgs.length
for (let i = 0; i <imgsLength; i++) {
   
    const element = imgs[i];
  
    console.log(element);
     element.addEventListener('click', (e) => {
        img.src = imgs[i].src
        const color = e.target.dataset.color
        console.log(color);
        document.querySelector('section').style.background= color
    })
    
}
const toggleMenu = document.querySelector('.toggleMenu')
const navigation = document.querySelector('.navigation')
toggleMenu.addEventListener('click',menuToggle)

function menuToggle(){ 
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
}