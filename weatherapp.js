// greeting & time

const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = ('0'+ currentDate.getMinutes()).slice(-2);

let messagePrefix = "It is";
let message = "Welcome!";

document.getElementById("greeting").innerHTML = (`${message}<br>${messagePrefix} ${hours}:${minutes}`);


// retrieving data & functions

const key = "8e7ec57f340ef4a3133f601f542d661d";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let city = document.getElementById("city");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let description = document.getElementById("desc");

// functions & event listeners

searchButton.addEventListener("click", getWeather);
searchInput.addEventListener("keyup", enterKeyUp);


// onkeyup

function enterKeyUp(e) {
    if (e.key === "Enter") {
        getWeather();
        document.getElementById("toggle").className = "show";
    }
}
// get weather

function getWeather() {
    if (searchInput.value === "") {
        
    } else {
        let link = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid=" + key;
        myHttpRequest(link, updatedData);
        document.getElementById("toggle").className = "show";
    }
}
// update data

function updatedData(data) {
    let myData = JSON.parse(data);
    city.innerHTML = myData.name;
    icon.src = "http://openweathermap.org/img/w/" + myData.weather[0].icon + ".png";
    temperature.innerHTML = parseInt(myData.main.temp - 273) + "&#x2103";
    description.innerHTML = myData.weather[0].description;
}
// http request

function myHttpRequest(url, callback) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true);
    httpRequest.send();
}
















// future implementation (language)

// switch (language) {
//     case "en":
//         if (hours >= 0 && hours <= 7) document.getElementById("greeting").innerHTML = "Good night!";
//         else if (hours >= 7 && hours <= 12) document.getElementById("greeting").innerHTML = "Good morning!";
//         else if (hours >= 12 && hours <= 18) document.getElementById("greeting").innerHTML = "Hello there!";
//         else if (hours >= 18 && hours <= 23) document.getElementById("greeting").innerHTML = "Good evening!";
//         break;
//     case "de":
//         if (hours >= 0 && hours <= 7) document.getElementById("greeting").innerHTML = "Gute Nacht!";
//         else if (hours >= 7 && hours <= 12) document.getElementById("greeting").innerHTML = "Guten Morgen!";
//         else if (hours >= 12 && hours <= 18) document.getElementById("greeting").innerHTML = "Guten Tag!";
//         else if (hours >= 18 && hours <= 23) document.getElementById("greeting").innerHTML = "Guten Abend!";
//         break;
// }

