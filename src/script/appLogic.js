import LocationController from '../DataComponents/LocationController.js';
import getData from '../DataComponents/WeatherAPIFetcher.js';
import createForecast from '../DataComponents/ForecastClass.js';

function getMainInfoSelectors() {
    const locationName = document.getElementById('location-name');
    const mainIcon = document.getElementById('main-icon');
    const forecastText = document.getElementById('forecast-text');
    const description = document.getElementById('description');
    const cloudiness = document.getElementById('cloudiness');
    const feelsLike = document.getElementById('feels-like');
    const pressure = document.getElementById('pressure');
    const humidity = document.getElementById('humidity');
    const visibility = document.getElementById('visibility');
    const rain = document.getElementById('rain');

    return {locationName, mainIcon, forecastText, description, cloudiness, feelsLike, pressure, humidity, visibility, rain};
}

function renderDefaultLocation() {
    renderLocation(LocationController.getDefaultLocation());
}

async function renderLocation(location) {
    const forecast = await createForecastObject(location);
    const {locationName, mainIcon, forecastText, description, cloudiness, feelsLike, pressure, humidity, visibility, rain} = getMainInfoSelectors();
    //changeLocationName(locationName, data)
    forecast.printDetails();
}

async function createForecastObject(location) {
    const data = await getData(location);
    console.log(data)
    return createForecast(data.name, data.weather[0].icon, data.weather[0].main, data.weather[0].description, data.clouds.all, data.main.feels_like, data.main.pressure, data.main.humidity, data.visibility, data.rain3h);
}

// function changeLocationName(holder, data) {

// }



export {renderDefaultLocation};