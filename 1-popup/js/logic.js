// handle click subtribe

const subscribed = document.querySelector('button')
// console.log(subscribed);
const  modalOpen = document.getElementById('modal')
console.log(modalOpen);
const closedOff = document.getElementById('close')

subscribed.addEventListener('click', clicked)

function clicked() {
    modalOpen.style.display= "grid"
    modalOpen.classList.remove('close-modal-animation')
    modalOpen.style.removeProperty('animation')
    
}
closedOff.addEventListener('click', closeModal)

function closeModal() {
   
   modalOpen.classList.add('close-modal-animation')
   setTimeout(() => {
    modalOpen.style.display='none'
   }, 1000);
}
modalOpen.addEventListener('click',function(e){
if(e.target.id === 'modal'){
  
    closeModal();

}
})


