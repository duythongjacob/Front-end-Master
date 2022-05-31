const menu = document.querySelector('.menuToggle')
const navigation = document.querySelector('.navigation')
console.log({menu})

function scrollNav() {
     const nav = document.querySelector('nav')
     if(window.scrollY === 0) {
          nav.removeAttribute('class')
     }
     nav.classList.toggle("sticky", window.scrollY >0 )    

}

menu.onclick = toggleMenu
function toggleMenu() {
     
     menu.classList.toggle('active')
     navigation.classList.toggle('active')
}
window.addEventListener('scroll',  scrollNav)