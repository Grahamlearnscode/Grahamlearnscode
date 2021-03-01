// app.js for DOM manipulation
console.log('app connected');

const card = document.querySelector('.card');
const cityForm = document.querySelector('.change-location');
const icon = document.querySelector('.icon img');
const time = document.querySelector('img.time');
let details = document.querySelector('.details');
let clock = document.querySelector('#clock');
let city = '';
let cityDetails = '';
let domCity = '';
let domState = '';
let domCountry = '';
let domWeatherText = '';
let domTemp = '';

// get city name, weather, time
const getDetails = async(city) => {
  await getCity(city);
  if(cityDetails){setCityDetails(); //handles invalid inputs
  const cityId = cityDetails.Key;
  await getWeather(cityId);
  setWeatherDetails();
  let cityTime = convertTZ(new Date(), cityDetails.TimeZone.Name);
  cityTime = dateFns.format(cityTime, 'HH:mm');
  updateIcon(cityWeather);
  setDayNightImg(cityWeather);
  details.innerHTML = `
    <h5 class="mt-3">${domCity}<span class="state">${domState}</span></h5>
    <h6 class="text-capitalize"><span class="country">${domCountry} </span><span id="clock">${cityTime}</h6>
    <div class="my-4">${domWeatherText}</div>
    <div class="display-4 my-4">
        <span>${domTemp}°C</span>
    </div>
  `;
  card.classList.remove('d-none'); //display card in UI
}};

// Retrieve local storage on page load
if (localStorage.city) {
  city = localStorage.city;
  console.log(`requesting data from ${city} from local storage`);
  getDetails(city);
}

// User submits form
cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    city = cityForm.city.value.trim();
    localStorage.setItem('city', city);
    cityForm.reset();
    getDetails(city);
});

// Get current time in city
function convertTZ(date, tzString) {
  return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
};

function updateClock() {
  if(cityDetails){
  let cityTime = convertTZ(new Date(), cityDetails.TimeZone.Name);
  cityTime = dateFns.format(cityTime, 'HH:mm');
  clock = document.querySelector('#clock');
  clock.innerHTML = `${cityTime}`; // update DOM clock
}};

setInterval (updateClock, 1000);

function setCityDetails() {
  domCity = cityDetails.EnglishName;
  if (cityDetails.AdministrativeArea.EnglishType === 'State' || cityDetails.AdministrativeArea.EnglishType === 'Province' || cityDetails.AdministrativeArea.EnglishType === 'District' )
    {domState = `, ${cityDetails.AdministrativeArea.ID}`;
    }else{
      domState = '';}
  domCountry = cityDetails.Country.EnglishName;
}; 

function setWeatherDetails() {
  if(cityDetails){
  domWeatherText = cityWeather.WeatherText;
  domTemp = Math.round(cityWeather.Temperature.Metric.Value);
}};

function updateIcon() {
  const iconSrc = `weather-app/img/icons/${cityWeather.WeatherIcon}.svg`; //weather icons
  icon.setAttribute('src', iconSrc);
};

function setDayNightImg() {
  let timeSrc = cityWeather.IsDayTime ? 'weather-app/img/day.svg' : 'weather-app/img/night.svg';
time.setAttribute('src', timeSrc);
console.log(timeSrc);
};