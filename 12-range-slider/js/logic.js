
var range = document.querySelector('.range')
var background = document.querySelector('.container')
var processTor = document.querySelector('.process')

function handleProcess(percent) {
   
    processTor.style.width = percent+'%'
    processTor.innerHTML =  percent + '%'
    background.style.background =  `linear-gradient( to right, rgba(0,0,0, ${percent/100}), rgba(0,0,0,1)), url(https://source.unsplash.com/random) no-repeat center/cover`
}
handleProcess(30)
range.addEventListener('mousemove',function(e) {
    console.log(e);
   let lengProcess = e.pageX - this.offsetLeft
   console.log(lengProcess);

   let percentProcess = (lengProcess/this.offsetWidth)*100
   let result = Math.round(percentProcess)
    handleProcess(result)
  

})



