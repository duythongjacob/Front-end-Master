const tabs = document.querySelector('.container')
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab__content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  console.log(id);
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    console.log(e.target);
    e.target.classList.add("active");
   
    contents.forEach(content => {
      content.style.display= "none"
    });
    const element = document.getElementById(id);
    element.style.display = "block"
  }
}