var eKey = document.querySelector('.key .box__code');
var eLocation = document.querySelector('.location .box__code');
var eWhich = document.querySelector('.which .box__code');
var eCode = document.querySelector('.code .box__code');
var eCircle = document.querySelector('.inner__circle');
var pressKey = document.querySelector('.press__key');
var innerKey = document.querySelector('.inner__key');

document.addEventListener(
    'keydown',
    (e)=>{
       eCircle.innerText = e.which;


	eKey.innerText = e.key;
	eLocation.innerText = e.location;
	eWhich.innerText = e.which;
	eCode.innerText = e.code;
        console.log(e);

        pressKey.classList.add('hide');
        innerKey.classList.remove('hide');
    }
)

