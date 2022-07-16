import LocationController from './LocationController.js';
import fireAlert from '../UIComponents/alert.js';




async function getCurrentWeatherData(location) {
   
    return await fetchCurrentWeatherData(location);
}


async function fetchCurrentWeatherData(location) {
    try {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${LocationController.getAPIKey()}`, {mode: 'cors'})
        const obj = await data.json();
        return obj;
    } catch(error) {
        fireAlert("Please reload the page.");
    }
}

async function fetchFiveDayForecastData(location) {
    try {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${LocationController.getAPIKey()}`, {mode: 'cors'})
        const obj = await data.json();
        return obj;
    } catch(error) {
        fireAlert("Please reload the page.");
    }
}

export  {getCurrentWeatherData, fetchFiveDayForecastData}