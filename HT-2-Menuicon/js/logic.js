const change = document.querySelector('.ctn__menu-icon')
const menuIcon = document.querySelector('.ctn__menu-icon')

menuIcon.addEventListener('click', close)
function close() {

    change.classList.toggle('change')
}