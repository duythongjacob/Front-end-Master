const img = document.querySelector('.main-img')
const imgs = document.querySelectorAll('.thumb li img')
const imgsLength = imgs.length
console.log(img);
for (let i = 0; i <imgsLength; i++) {
   
    const element = imgs[i];
  
    console.log(element);
     element.addEventListener('click', (e) => {
        img.src = imgs[i].src
        console.log(imgs[i].src);
        const color = e.target.dataset.color
        console.log(color);
        document.querySelector('.circle').style.background= color
    })
    
}