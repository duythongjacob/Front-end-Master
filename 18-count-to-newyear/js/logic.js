const year = document.querySelector('h2 span:last-child')
const newYear = new Date().getFullYear() + 1

const amLich = new Date(newYear,0,1,0,0).getTime()
year.innerHTML =  newYear
year.style.fontSize = "40px"
function countDown() {
    var now = new Date().getTime()
    let second = 1000
    let minute = second*60
    let hour = minute*60
    let day = hour*24
    dayCount = amLich - now
 
    const d = Math.floor(dayCount/ day)
    const h = Math.floor((dayCount%day)/hour)

    const m = Math.floor((dayCount%hour)/minute) 
    const s = Math.floor((dayCount%minute)/second)
    

   
    document.getElementById('day').innerHTML = d
    document.getElementById('hour').innerHTML = h
    document.getElementById('minute').innerHTML = m
    document.getElementById('second').innerHTML = s

}

setInterval(function() {
    countDown()
}, 1000)