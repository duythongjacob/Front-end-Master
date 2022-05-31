const bigWrap = document.querySelector('body')
console.log(bigWrap);
const wrapper = document.querySelector('.wrapper .icon__nav')
const textDiv = document.querySelector('.icon__nav + div')
let sidenav = document.querySelector('.sidenav')

wrapper.addEventListener('click', openNav)
textDiv.addEventListener('click', openNav)

function openNav() {

  if(!sidenav.style.width ){
    bigWrap.style.marginLeft = '250px'
    bigWrap.style.backgroundPosition = '250px center'
    sidenav.style.width = '250px'
    
  } else {

      closeNav()
  }  
}
function closeNav() {
  bigWrap.style.marginLeft = '0'
  bigWrap.style.backgroundPosition = ' center'
  sidenav.style.width = null
}
document.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target.className == 'wrapper') closeNav();
});



