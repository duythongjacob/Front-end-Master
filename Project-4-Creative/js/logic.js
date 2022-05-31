const menuToggle = document.querySelector('.menuToggle')
const navigation = document.querySelector('.navigation')
menuToggle.onclick= showMenu


// console.log(window.getComputedStyle(navigation).zIndex);
function showMenu() {
     if(navigation.style.left){
          console.log('da chay');
    
          navigation.removeAttribute('style')
     }
     else{
          navigation.style.left= "0px"
     }
     
   
}
