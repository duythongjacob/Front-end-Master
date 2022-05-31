var container = document.querySelectorAll('.accordion')
container.forEach(els => {
    els.onclick = function () {
        els.classList.toggle('active')
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          console.log(panel.offsetHeight);
        } 
    }
});