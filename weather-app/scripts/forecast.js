//forecast.js for interacting with the weather APIs

const key = '3aCQBxyYgdQGOnZwe9crZ4hs65nT3fnG'

//Locations API
///http://dataservice.accuweather.com/locations/v1/cities/search

// get city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    console.log('requesting to:' + base + query);
    
    const response = await fetch(base + query);
    const data = await response.json();
    console.log('request complete');
    console.log('data is: ', data[0])
    return data[0];
};

// get weather info for city
const getWeather = async (id) => {


    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};



// Get Cities returns
// Country > EnglishName
// TimeZone > Code
// TimeZone GmtOffset
// TimeZone IsDaylightSaving
//{datevar}.toTimeString()