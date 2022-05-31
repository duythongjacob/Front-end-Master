var backgroundChange= document.querySelector('.container');
console.log(backgroundChange);

var imageChange= document.querySelector('.container__main');
var search= document.querySelector('.search');

var city= document.querySelector('.name .city');

var time= document.querySelector('.time');
var content= document.querySelector('.content');

var temperature= document.querySelector('.content__temp .temp__number');

var shortDesc= document.querySelector('.content__shortDesc');
var visibility= document.querySelector('.visibility span');
var wind= document.querySelector('.wind span');
var cloud= document.querySelector('.cloud span');
async function changeWeather(capitalSearch) {
    var capitalSearch = capitalSearch.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    let data = await fetch(url).then(res => res.json())

    if(data.cod=== 200){
        content.classList.remove('hide')
    
        city.innerHTML = data.name;
        // country.innerHTML = data.sys.country;
        time.innerHTML = new Date().toLocaleString();
        shortDesc.innerHTML = data.weather[0].main;
        temperature.innerHTML = Math.round(data.main.temp);
        visibility.innerHTML = data.visibility + ' (m)';
        wind.innerHTML = data.wind.speed + ' (m/s)';
        cloud.innerHTML = data.clouds.all + ' (%)';
        data.main.temp >= 18 ? (document.body.className = 'hot') : (document.body.className = 'cold')
    
    
    } else{
        city.innerHTML= "Ops!"
        content.classList.add('hide')
    }

}
changeWeather('ha noi');

search.addEventListener('keypress', (e)=> {
    if(e.code === 'Enter'){
        changeWeather(e.target.value);
    }
})