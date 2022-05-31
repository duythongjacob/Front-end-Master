var inputValue = document.querySelector('.input__value');
var tagButton = document.querySelector('.tag__button');
var bigButton = document.querySelector('.button');
var myArray = ['nodejs','php','java'];
function renderArray() {
    tagButton.innerHTML=" "
    for (let i = 0; i < myArray.length; i++) {
        const tag = myArray[i];
        tagButton.innerHTML += `
        <div class="tags">
        <p> ${tag}</p>
        <i class="fa-solid fa-xmark" onclick="remove(${i})"></i>
        </div>
        `
    }
  
    inputValue.focus();
}

renderArray()
//remove item
function remove(index){
   myArray.splice(index,1)
   renderArray();
         
}


inputValue.addEventListener('keydown', (e)=>{
    if(e.code =="Enter"){ 
        var getValue =inputValue.value;     
             myArray.push(getValue);
            //  console.log(myArray);
             renderArray();
         
    }

}) 
// console.log(bigButton);
bigButton.addEventListener('click', () => {
    inputValue.value=""
    myArray= []
    renderArray();
})