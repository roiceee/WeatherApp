import LocationController from '../DataComponents/LocationController.js';
import getData from '../DataComponents/WeatherAPIFetcher.js';
import createForecast from '../DataComponents/ForecastClass.js';

function getMainInfoSelectors() {
    const locationName = document.getElementById('location-name');
    const mainIcon = document.getElementById('main-icon');
    const description = document.getElementById('description');
    const cloudiness = document.getElementById('cloudiness');
    const temperature = document.getElementById('temperature');
    const pressure = document.getElementById('pressure');
    const humidity = document.getElementById('humidity');
    const visibility = document.getElementById('visibility');
    const rain = document.getElementById('rain');
    const windspeed = document.getElementById('wind-speed');
    return {locationName, mainIcon, description, cloudiness, temperature, pressure, humidity, visibility, rain, windspeed};
}

function renderDefaultLocation() {
    renderLocation(LocationController.getDefaultLocation());
}

async function renderLocation(location) {
    const forecast = await createForecastObject(location);
    const {locationName, mainIcon, description, cloudiness, temperature, pressure, humidity, visibility, rain, windspeed} = getMainInfoSelectors();
    changeContent(locationName, forecast.getLocationName());
    changeContent(mainIcon, forecast.getMainIcon());
    changeContent(description, forecast.getForecastText() + ", " + forecast.getDescription());
    changeContent(cloudiness, forecast.getCloudiness());
    changeContent(temperature, forecast.getTemperature());
    changeContent(pressure, forecast.getPressure());
    changeContent(humidity, forecast.getHumidity());
    changeContent(visibility, forecast.getVisibility());
    changeContent(rain, forecast.getRain());
    changeContent(windspeed, forecast.getWindspeed());
    forecast.printDetails();
}

async function createForecastObject(location) {
    const data = await getData(location);
    console.log(data);
    return createForecast(data.name, data.weather[0].icon, data.weather[0].main, data.weather[0].description, 
        data.clouds.all, data.main.temp, data.main.pressure, data.main.humidity, data.visibility, data.rain3h, 
        data.wind.speed);
}

 function changeContent(holder, data) {
    holder.textContent = data;
 }



export {renderDefaultLocation};