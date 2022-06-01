
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

// swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  function toggleMenu(params) {
      const menuToggle = document.querySelector('.toggle')
      const navigation = document.querySelector('.navigation')
      navigation.classList.toggle('active')
      menuToggle.classList.toggle('active')
  }