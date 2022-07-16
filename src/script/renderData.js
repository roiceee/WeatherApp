import LocationController from '../DataComponents/LocationController.js';
import {getCurrentWeatherData, fetchFiveDayForecastData} from '../DataComponents/WeatherAPIFetcher.js';
import {convertKelvinToCelsius, convertMeterToKM, launchSpinner, displayUI, hideUI, deleteSpinner } from './utils';
import createFiveDayForecast  from '../DataComponents/FiveDayForecastClass.js';
import createCurrentWeather from '../DataComponents/CurrentWeatherClass.js';
import fireAlert from '../UIComponents/alert.js';
import { format } from 'date-fns'

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

function getFiveDayForecastSelectors() {
    const locationName = document.getElementById('location-name-1');
    const forecastDates = document.querySelectorAll('.forecast-date');
    const forecastIcons = document.querySelectorAll('.forecast-icon');
    const forecastTemperatures = document.querySelectorAll('.forecast-temperature');
    const forecastDescriptions = document.querySelectorAll('.forecast-description');
    return {locationName, forecastDates, forecastIcons, forecastTemperatures, forecastDescriptions};
}

async function renderDefaultLocation() {
    hideUI();
    const isValid = await renderLocation(LocationController.getDefaultLocation());
        if (!isValid) {
            setTimeout(() => {
                renderDefaultLocation();
            }, 3000)
        }
}

async function renderLocation(location) {
    try {
        launchSpinner();
        const currentWeatherData = await createCurrentWeatherDataObject(location);
        updateMainInfoDOM(currentWeatherData);
        const fiveDayWeatherForecast = await createFiveDayForecastDataObject(location);
        updateFiveDayForecastDOM(fiveDayWeatherForecast);
        displayUI();
        deleteSpinner();
        saveLocationName(location)
        return true;
    } catch(error) {
        return false;
    }
}

async function createCurrentWeatherDataObject(location) {
        const data = await getCurrentWeatherData(location);
        if (isInvalidLocation(data)) {
            fireAlert(data.message);
            return;
        }
    return createCurrentWeather(`${data.name}, ${data.sys.country}`, data.weather[0].icon, data.weather[0].main, data.weather[0].description, 
        data.clouds.all, data.main.temp, data.main.pressure, data.main.humidity, data.visibility, data.rain3h, 
        data.wind.speed); 
    } 


async function createFiveDayForecastDataObject(location) {
        const data = await fetchFiveDayForecastData(location);
        if (isInvalidLocation(data)) {
            fireAlert(data.message);
            return;
        }
        const forecastDataArray = getForecastData(data);
        return createFiveDayForecast(`${data.city.name}, ${data.city.country}`, forecastDataArray);
}

function updateMainInfoDOM(currentWeatherData) {
    const {locationName, mainIcon, description, cloudiness, temperature, pressure, humidity, visibility, windspeed} = getMainInfoSelectors();
        changeContent(locationName, currentWeatherData.getLocationName());
        changeContent(mainIcon, currentWeatherData.getMainIcon());
        changeContent(description, `${currentWeatherData.getForecastText()}, ${currentWeatherData.getDescription()}`);
        changeContent(cloudiness, currentWeatherData.getCloudiness());
        changeContent(temperature, convertKelvinToCelsius(currentWeatherData.getTemperature()));
        changeContent(pressure, currentWeatherData.getPressure());
        changeContent(humidity, currentWeatherData.getHumidity());
        changeContent(visibility, convertMeterToKM(currentWeatherData.getVisibility()));
        changeContent(windspeed, currentWeatherData.getWindspeed());
}

function updateFiveDayForecastDOM(fiveDayWeatherForecast) {
    const array = fiveDayWeatherForecast.getForecastDataArray()

    const {locationName, forecastDates, forecastIcons, forecastTemperatures, forecastDescriptions} = getFiveDayForecastSelectors();
    changeContent(locationName, fiveDayWeatherForecast.getLocationName());
    for (let i = 0; i < array.length; i++) {
        changeContent(forecastDates[i], processDate(array[i].date));
        changeContent(forecastIcons[i], array[i].icon);
        changeContent(forecastTemperatures[i], convertKelvinToCelsius(array[i].temperature));
        changeContent(forecastDescriptions[i], array[i].description);
    }
}

function getForecastData(data) {
    const twelveAMForecasts = filter12AMForecasts(data.list);
    const forecastData = mapForecastData(twelveAMForecasts);
    return forecastData;
}

function processDate(date) {
    date = date.split("-");
    const newDate = new Date(date[0], date[1] - 1, date[2]);
    date = format(newDate, "E, MMMM dd, yyyy");
    return date;
}

function filter12AMForecasts(array) {
 return array.filter((obj) => {
        const time = obj.dt_txt.split(" ");
        return time[1] === "00:00:00";
    })
}

function mapForecastData(array) {
    return array.map((obj) => {
        return {"date": obj.dt_txt.split(" ")[0], "temperature": obj.main.temp, 
        "icon": obj.weather[0].icon, "description": `${obj.weather[0].main}, ${obj.weather[0].description}`};
    })
}

function changeContent(holder, data) {
    //special case for icon
    if (holder.id === "main-icon") {
        holder.setAttribute('src', `https://openweathermap.org/img/wn/${data}@4x.png`)
        return;
    }
    if (holder.classList.contains('forecast-icon')) {
        holder.setAttribute('src', `https://openweathermap.org/img/wn/${data}@4x.png`)
        return;
    }
    holder.textContent = data;
}

function isInvalidLocation(data) {
    if (data !== undefined && data !== null && Object.prototype.hasOwnProperty.call(data, 'cod')) {
        return data.cod === "404";    
    }
    return false;
}

function saveLocationName(location) {
    LocationController.setDefaultLocation(location);
}



export {renderDefaultLocation, renderLocation};