import LocationController from './LocationController.js';

export default async function getData(location) {
    //returns a JSON containing location's data
    return await fetchData(location);
}


async function fetchData(location) {
    const {latitude, longitude} = location.getCoordinates();
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${LocationController.getAPIKey()}`, {mode: 'cors'})
    const obj = await data.json();
    return obj;
}