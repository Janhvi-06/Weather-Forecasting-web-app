

// ACCESS ALL THE HTML ELEMENTS : 

// container : Page Title : 
const Page_Title = document.getElementsByClassName("page_title");


// container 1 : body and main section
const body = document.querySelector("body");
const main = document.querySelector("main");

// container 2 : search_bar and submit_button
const search_bar = document.querySelector(".searchBTN");
const submit_btn = document.querySelector(".submit");

// container 3 : weather_img, temp_inDeg, location
const weather_img = document.querySelector(".weather_img");
const temp_inDeg = document.querySelector(".temperature");
const temp_state = document.querySelector(".temp_state");
const Your_location = document.querySelector("#location");

// container 4 : humidity and windSpeed
const humidity = document.querySelector(".humidity_percent");
const windSpeed = document.querySelector(".wind_km");


// containers of weather data : it will be used in if error gets and if error not gets...
const weatherImg_container = document.querySelector(".weather_img_div")
const temp_loc_container = document.querySelector(".Temperature_and_location_box");
const humi_wind_container = document.querySelector(".humidity_AND_windSpeed")
const refresh_button = document.querySelector(".refresh_btn");

const loc_not_found = document.querySelector(".loc_not_found");


// used for refresh button :
let main_page = document.querySelector(".Search_and_Submit");



let main_container = document.querySelector(".main_container");

//used for loader symbol : 
let loader = document.getElementById("loader");
console.log(loader.innerHTML);
function showLoader()
{
    main.style.display="none";
    loader.style.display="flex";
}
function hideLoader()
{
        main.style.display="flex";
    loader.style.display="none";
}







// check_weather function created so that it will check weather by fetching api ...!
async function check_weather(city)        
{
    //  we need to fetch the api using promises or async await...! and here we have copy pasted the api_key and url from external api website to fetch the data
    const api_key = "6ab28613038363e1eec049edce47c3fc";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=${api_key}`;



// till fetching the api data, the loader will appear on the webpage...! 
 showLoader();

 
    // code to - fetch the API :
    const fetch_weatherData = await fetch(url)
    .then(response => response.json());
    console.log(fetch_weatherData);

  
    
    if (fetch_weatherData.cod === "404") {
        loc_not_found.style.display = "flex";
        weatherImg_container.style.display = "none";
        temp_loc_container.style.display = "none";
        humi_wind_container.style.display = "none";
        refresh_button.style.display = "flex";
        submit_btn.style.display = "none";

    }
    else {
        loc_not_found.style.display = "none";
        weatherImg_container.style.display = "flex";
        temp_loc_container.style.display = "flex";
        humi_wind_container.style.display = "flex";
        refresh_button.style.display = "flex";
        main.style.display="flex";
    }


    //after the above data is fetched the loader will be hide
    hideLoader();



   





    // SET TEMP (from data got from fetch_weather) : 
    temp_inDeg.innerText = `${Math.round(fetch_weatherData.main.temp - 273.15)}°C`;      //use (math.round) func and (-273.15 °C) to convert numeric digit into deg celcius format

    // set TEMP STATE :
    temp_state.innerText = ` (${fetch_weatherData.weather[0].description})`;

    // SET LOCATION :
    Your_location.innerText = `${fetch_weatherData.name}`;


    //SET HUMIDITY : 
    humidity.innerText = `${fetch_weatherData.main.humidity}%`;

    //SET WIND_SPEED :
    windSpeed.innerText = `${fetch_weatherData.wind.speed}Km/H`;

    // SET LOC_NOT_FOUND PAGE :



    // SET THE WEATHER CHANGEABLE IMAGES :
    if (fetch_weatherData.weather[0].main === "Clouds") {
        weather_img.src = "Clouds.png";
    }
    else if (fetch_weatherData.weather[0].main === "Rain") {
        weather_img.src = "rain_image.png";
    }
    else if (fetch_weatherData.weather[0].main === "sunny") {
        weather_img.src = "sunny_Weather.png";
    }
}


// logic to submmit_Btn : 
submit_btn.addEventListener('click', () =>                     
{
    check_weather(search_bar.value);                            

})


// when we enter location, then by entering on keyboard we can directly move to the submit button by below code :
search_bar.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        submit_btn.click();         //.click is JS inbuilt function... 
    }
})


// logic to refresh button :   TO LOAD THE PAGE just type "location.reload();"
refresh_button.addEventListener('click', () => {
    location.reload();        //"location" method is inbuilt in js
    console.log("refresh page");
})










































