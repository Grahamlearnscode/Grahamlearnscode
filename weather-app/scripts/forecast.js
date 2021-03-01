// forecast.js for communicating with weather API

// my API key
const apiKey = '3aCQBxyYgdQGOnZwe9crZ4hs65nT3fnG';

// Locations API
///http://dataservice.accuweather.com/locations/v1/cities/search

// current conditions API
///http://dataservice.accuweather.com/currentconditions/v1/

// London 328328

console.log('forecast connected');

// Get city details: name, state, key, timezone
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;
    console.log(`requesting city details for ${city} to: ${base}${query}`);
    const response = await fetch(base + query);
        if(response.status !== 200){
            console.log(`error fetching data. Status: ${response.status}`);
            cityDetails = false;
        }else{
    cityDetails = await response.json();
        if(cityDetails.length <= 0){console.log(`error fetching data. Number of records: ${response.json.length}`);
            cityDetails = false;}
        else{
    console.log('request complete');
    // assume the first city returned is the desired one
    cityDetails = cityDetails[0];
    console.log('cityDetails: ', cityDetails);
    return cityDetails;}}
};

// Get current weather details for city
const getWeather = async (cityId) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityId}?apikey=${apiKey}`;
    console.log(`requesting current weather for ${city} ${cityId} to: ${base}${query}`);
    const response = await fetch(base + query);
        if(response.status !== 200){
            console.log(`error fetching data. Status: ${response.status}`);
        }else{
    cityWeather = await response.json();
        if(cityWeather.length <= 0){console.log(`error fetching data. Number of records: ${response.json.length}`);}
        else{
    console.log('request complete');
    cityWeather = cityWeather[0];
    console.log('cityWeather: ', cityWeather);
    return cityWeather;}}
};

// returns dummy local city data for Toronto
const getDummyCity = async(city) => {
    console.log('requesting city data for', city)
    console.log('requesting dummy local data for Toronto');
    const response = await fetch('cityDetails.json')
    //// error handling
    cityDetails = await response.json();
    //// error handling
    console.log('request complete');
    // assume the first city returned is the desired one
    cityDetails = cityDetails[0];
    console.log('cityDetails: ', cityDetails);
    return cityDetails;
};


