import LocationController from '../DataComponents/LocationController.js';
import getData from '../DataComponents/WeatherAPIFetcher.js';
import createForecast from '../DataComponents/ForecastClass.js';
import fireAlert from '../UIComponents/alert.js';

function getMainInfoSelectors() {
    const locationName = document.getElementById('location-name');
    const mainIcon = document.getElementById('main-icon');
    const description = document.getElementById('description');
    const cloudiness = document.getElementById('cloudiness');
    const temperature = document.getElementById('temperature');
    const pressure = document.getElementById('pressure');
    const humidity = document.getElementById('humidity');
    const visibility = document.getElementById('visibility');
    const windspeed = document.getElementById('wind-speed');
    return {locationName, mainIcon, description, cloudiness, temperature, pressure, humidity, visibility, windspeed};
}

function renderDefaultLocation() {
    renderLocation(LocationController.getDefaultLocation());
}

async function renderLocation(location) {
    console.log(location);
    try {
        const forecast = await createForecastObject(location);
        const {locationName, mainIcon, description, cloudiness, temperature, pressure, humidity, visibility, windspeed} = getMainInfoSelectors();
        changeContent(locationName, forecast.getLocationName());
        changeContent(mainIcon, forecast.getMainIcon());
        changeContent(description, `${forecast.getForecastText()}, ${forecast.getDescription()}`);
        changeContent(cloudiness, forecast.getCloudiness());
        changeContent(temperature, forecast.getTemperature());
        changeContent(pressure, forecast.getPressure());
        changeContent(humidity, forecast.getHumidity());
        changeContent(visibility, forecast.getVisibility());
        changeContent(windspeed, forecast.getWindspeed());
    forecast.printDetails();
    } catch (error) {
        console.log(error);
    }
}

async function createForecastObject(location) {
    try {
        const data = await getData(location);
    return createForecast(`${data.name}, ${data.sys.country}`, data.weather[0].icon, data.weather[0].main, data.weather[0].description, 
        data.clouds.all, data.main.temp, data.main.pressure, data.main.humidity, data.visibility, data.rain3h, 
        data.wind.speed); 
    } catch(error) {
        fireAlert("Invalid location or no internet connection. ");
    }
}

 function changeContent(holder, data) {
    //special case for icon
    if (holder.id === "main-icon") {
        holder.setAttribute('src', `https://openweathermap.org/img/wn/${data}@4x.png`)
        return;
    }
    holder.textContent = data;
 }



export {renderDefaultLocation, renderLocation};