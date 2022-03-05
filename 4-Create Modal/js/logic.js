const buttonOpen = document.querySelector(".button__action");
const modals = document.querySelector(".modal");
const closeButton = document.querySelector('.button__close');
const closeHeader = document.querySelector('.header__close');
const selectC = document.querySelector('.modal__content');
function openBox(){
    
    modals.classList.remove('hide')
 
}
function closeBox(e) {
    // e.stopPropagation();
    modals.classList.add('hide'); 
    console.dir(e.target);
    console.dir(e.currentTarget);
}
buttonOpen.addEventListener('click',openBox)
closeButton.addEventListener('click',closeBox)
closeHeader.addEventListener('click',closeBox)
modals.addEventListener('click',(e)=>{ 
    console.dir(e.target);
    console.dir(e.currentTarget);
    // if(e.target === e.currentTarget) {
    //     console.dir(e.target);
    //     console.dir(e.currentTarget);
    //     modals.classList.add('hide')
    
    // } 
   
        modals.classList.add('hide')
    })   

// selectC.addEventListener('click',(e) =>{

//         e.stopPropagation();
//         console.dir(e.target);
//         console.dir(e.currentTarget);
//         console.log('hello');
console.log('hello');