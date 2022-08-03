import LocationController from './LocationController.js';
import fireAlert from '../UIComponents/alert.js';


async function fetchWeatherData(location) {
    try {
        const currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${LocationController.getAPIKey()}`, {mode: 'cors'})
        const fiveDayWeather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${LocationController.getAPIKey()}`, {mode: 'cors'})
        const currentWeatherData = await currentWeather.json();
        const fiveDayWeatherForecast = await fiveDayWeather.json();
        return {currentWeatherData, fiveDayWeatherForecast};
    } catch(error) {
        fireAlert("Can't fetch data. Please reload the page.");
    }
}

async function fetchWeatherDataUsingCoords(latitude, longitude) {
    try {
        const currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${LocationController.getAPIKey()}`, {mode: 'cors'})
        const fiveDayWeather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${LocationController.getAPIKey()}`, {mode: 'cors'})
        const currentWeatherData = await currentWeather.json();
        const fiveDayWeatherForecast = await fiveDayWeather.json();
        return {currentWeatherData, fiveDayWeatherForecast};
    } catch(error) {
        fireAlert("Can't fetch data. Please reload the page.");
    }
}

export  {fetchWeatherData, fetchWeatherDataUsingCoords}