const apiKey ="b92cad7b45d42f2b695e6b1d125d79f2";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const  searchbBox = document.querySelector("#search");
const  searchBtn = document.querySelector("#search-btn ");
const  weatherIcon = document.querySelector(".weather");
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search-btn");

searchInput.addEventListener("keydown",function(event){
if(event.key==="Enter"){
    event.preventDefault();
    searchButton.click(); 
}
});
async function checkWeather(city) {
    const response = await fetch(apiUrl +city+`&appid=${apiKey}`);

    if(response.status== 404)    
    {
        document.querySelector(".error").style.display ="block";
        document.querySelector("#display-weather").style.display ="none";
    }

else {
    
    var data = await response.json();
     

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

   if(data.weather[0].main =="Clouds"){
       weatherIcon.src = "asset/cloudy.png";
} 
   else if(data.weather[0].main =="Clear"){
    weatherIcon.src = "asset/clear.png";
   } 
   else if(data.weather[0].main =="Rain"){
    weatherIcon.src = "asset/rain.png";
   } 
   else if(data.weather[0].main =="Drizzle"){
    weatherIcon.src = "asset/drizzle.png";
   } 
   else if(data.weather[0].main =="Mist"){
    weatherIcon.src = "asset/mist.png";
   } 
   else if(data.weather[0].main =="Haze"){
    weatherIcon.src = "asset/haze.png";
   } 


    document.querySelector("#display-weather").style.display ="block";
    document.querySelector(".error").style.display ="none";
}


    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchbBox.value);
});


