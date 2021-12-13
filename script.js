// JavaScript code to change weather and humidity values

var button=document.querySelector('.search_button');
var search_content=document.querySelector('.search_content');

button.addEventListener('click',function(){
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+search_content.value+'&appid=5d42d2a5150aaef64ea583d5a8ab560f')
    .then(response => response.json())
    .then(data => {
        document.getElementById("degreecontent").innerHTML=(data['main']['temp']-273.15).toFixed(1) + "°C";
        document.getElementById("humiditycontent").innerHTML=data['main']['humidity']+"%";
        console.log(data);
    })
    .catch(err => alert("Wrong City Name!!"))
})
