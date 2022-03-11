document.querySelector('.search__btn').addEventListener('click',displayBox)
function displayBox(e) {
    // console.log(this);
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
    
   
   
}
window.addEventListener('mouseup',function(event){
    var pol = document.querySelector('.search__btn')
    if(event.target != pol ){
      
        pol.parentElement.classList.remove('open');
}});  
