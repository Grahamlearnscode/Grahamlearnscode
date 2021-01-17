//app.js for dom manipulation

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    const cityDetails = data.cityDetails;
    const weather = data.weather;
    // Handle states and provinces
    let stateHTML = ``;
        if(cityDetails.AdministrativeArea.EnglishType === 'State' 
        || cityDetails.AdministrativeArea.EnglishType ==='Province'){
            stateHTML = `, ${cityDetails.AdministrativeArea.ID}`;
        };

    // update details template
    details.innerHTML = `
        <h5 class="mt-3">${cityDetails.EnglishName}<span class="state">${stateHTML}</span></h5>
        <div class="country text-capitalize">${cityDetails.Country.EnglishName}</div>
        <div class="my-4">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // update the night/day & icon images
    //weather icon images
    const iconSrc = `weather-app/img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    //day/night check using ternary operator
    let timeSrc = weather.IsDayTime ? 'weather-app/img/day.svg' : 'weather-app/img/night.svg';
    time.setAttribute('src', timeSrc);

    //unhide card
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    };
};

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return { cityDetails, weather };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update UI with new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    // set local storage
    localStorage.setItem('city', city);
});


// load from local storage on page load
if(localStorage.city){
    updateCity(localStorage.city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
};

//// display locale time

// convert UTC to locale
function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}

// 
const tick = () => {
    const now = new Date();
    const localeNow = convertTZ(now, data.cityDetails.Timezone.code);
    const localeClock = dateFns.format(localeNow, 'HH:mm');
    console.log(localeClock);
}
setInterval(tick, 1000);


///Nope at 88
///data is not defined. How to get it into scope? Clock only needs to display when card is unhidden BUT setInterval for Tick needs to not be responsive to a page load or anything