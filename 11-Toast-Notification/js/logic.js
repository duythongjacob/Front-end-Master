var btnSuccess= document.querySelector('.main__button .success')
var btnWarning =document.querySelector('.main__button .warning')
var btnError =document.querySelector('.main__button .error')

btnSuccess.addEventListener('click', function() {
    createToast('success')
})

btnWarning.addEventListener('click', function() {
    createToast('warning')
})

btnError.addEventListener('click', function() {
    createToast('error')
})


function createToast(status){
    let templateInner 
switch(status){
    case 'success':
    templateInner=`
        <i class="fas fa-check-circle"></i>
        <span class="message">
        This is a success message !
        </span>
        <span class="countdown"></span>
        `
        break;
    case 'warning':
    templateInner=`
        <i class="fas fa-check-circle"></i>
        <span class="message">
        This is a warning message !
        </span>
        <span class="countdown"></span>
        `
        break;
    case 'error':
    templateInner=`
    <i class="fas fa-check-circle"></i>
    <span class="message">
    This is a error message !
    </span>
    <span class="countdown"></span>
    `
        break;
}            

var toast = document.createElement('div')
toast.classList.add('toast')
toast.classList.add(status)
toast.innerHTML = templateInner
var toastList = document.getElementById('toasts')
toastList.appendChild(toast)
setTimeout(() => {
    toast.style.animation = 'slide__hide  2s forwards'
}, 3000);
setTimeout(() => {
    toast.remove()
}, 5000);
     }
