const API_KEY = "969e5e9f0d58693316efa504ddc80e3f";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp};`
    } );
}

function onGeoError(){
    alert("그럼 날씨 못봐...");

}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

