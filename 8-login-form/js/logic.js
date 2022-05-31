var userName = document.getElementById('#username')
console.log(userName);
var email = document.getElementById('#email')
var password = document.getElementById('#password')
var confirmPassword = document.getElementById('#passwordConfirm')
console.log(confirmPassword);
var form = document.querySelector('form')




function showError(input, message) {
    let selectSmall = input.parentNode.querySelector('input ~ small');

    input.parentNode.classList.add('error');
    selectSmall.innerText = `${message}`;
}

function showSuccess(input, message) {
    let selectSmall = input.parentNode.querySelector('input ~ small');
    input.parentNode.classList.remove('error');
    selectSmall.innerText = `${message}`;
}

function checkEmptyError(listInput) {
    // console.dir(listInput);
    let isEmptyError = false;
    listInput.forEach( (input,e) => {
        
        input.value = input.value.trim();
    
        if( !input.value){
            isEmptyError = true;
            showError( input, 'Khong duoc de trong');
            
        }
        else{
            showSuccess(input, '');
        }
    });
    return isEmptyError;
}
function checkEmail(input) {
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value= input.value.trim();
    let emailError = !regexEmail.test(input.value);
  
    if(regexEmail.test(input.value)){
        showSuccess(input, 'Email hop le');
    }
    else{
        showError(input, 'Email khong hop le');
    
    }
       
    

    return emailError;
}
function checkCharacter(input,min,max){


      if(input.value.length <min){
        showError( input, 'Ky tu qua ngan');
        return true;
      } if (input.value.length>max) {
        showError( input, 'Ky tu qua dai');
        return true;
      }
   
      return false;
      
      
    }
function checkMatchPassword(passwordInput, confirmPasswordInput){
    if(passwordInput.value!==confirmPasswordInput.value){
        showError(password,'Ky tu khong trung nhau')
        return true;
    }
    return false;
}

form.onsubmit = (e)=> {
    e.preventDefault();
    let isEmptyError = checkEmptyError([userName, email, password, confirmPassword]);
    let isUsernameLengthError = checkCharacter(userName, 4, 6);
    let isPasswordLengthError = checkCharacter(password, 4, 20);
    let emailError = checkEmail(email);
    let isMatchError = checkMatchPassword(password,confirmPassword)
    
}