// app.js for DOM manipulation

console.log('app connected');

const card = document.querySelector('.card');
//// Placeholder - update DOM function should check for d-none and remove at that point
card.classList.remove('d-none');

const cityForm = document.querySelector('.change-location');
let clock = document.querySelector('#clock');
let city = '';
let cityDetails = '';

// get city name, weather, time
const getDetails = async(city) => {
  await getCity(city);
  //// set DOM city name variables
  console.log(cityDetails.Key);
  const cityId = cityDetails.Key;
  await getWeather(cityId);
  console.log(cityWeather.WeatherText);
  //// set DOM weather variables
  console.log(cityDetails.TimeZone.Name);
  let cityTime = convertTZ(new Date(), cityDetails.TimeZone.Name);
  cityTime = dateFns.format(cityTime, 'HH:mm:ss');
  console.log(cityTime);
  //// update DOM city details
  //// update DOM weather details
};


// Retrieve local storage on page load
if (localStorage.city) {
  city = localStorage.city;
  console.log(`requesting data from ${city} from local storage`);
  getDetails(city);
}

// User submits form
cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //// add input validation
    city = cityForm.city.value.trim();
    localStorage.setItem('city', city);
    console.log(`city is ${city}`);
    cityForm.reset();
    getDetails(city);
});

// Get current time in city
function convertTZ(date, tzString) {
  return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
};

function updateClock() {
  let cityTime = convertTZ(new Date(), cityDetails.TimeZone.Name);
  cityTime = dateFns.format(cityTime, 'HH:mm');
  clock.innerText = cityTime; // update DOM clock
}

setInterval (updateClock, 1000);