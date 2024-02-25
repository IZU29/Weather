const button =  document.getElementById('button')
const inputBox = document.getElementById('input-box')
const Latitude = document.getElementById('latitude')
const currentLocation = document.getElementById('location')
const Longitude = document.getElementById('Longitude')
const Temperature = document.getElementById('image')
// const Latitude = document.getElementById('')
let city = '';
let latCordinate;
let logCordinate;
let Locations;
let currentWeather;
let APikey = 'cb7789923301f3b53be0f08882a6323b'
button.addEventListener('click' , function(){
    console.log(inputBox.value)
    city = `${(inputBox.value)}`
    fetchCordinate()
})

function setLocation(locate){
    Locations = locate
    latCordinate = Locations[0].lat
    logCordinate = Locations[0].lon
    console.log(`${latCordinate},${logCordinate}`)
    // return Locations
    fetchWeather()
    
}
function checkWeather(weather){
    currentWeather = weather.main.temp
    changeElement()
    console.log(weather)
}
async function fetchCordinate(){
    await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${5}&appid=${APikey}`)
    .then(response => response.json())
    .then(jsons => setLocation(jsons))
    console.log(Locations[0])

    
}
async function fetchWeather(){
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latCordinate}&lon=${logCordinate}&appid=${APikey}`)
    .then(response => response.json())
    .then(jsons => checkWeather(jsons))
}
function changeElement(){
    Longitude.innerHTML = logCordinate
    Latitude.innerHTML = latCordinate
    currentLocation.innerHTML = `<h4>${city}</h4>`
    Temperature.innerHTML = currentWeather
}

