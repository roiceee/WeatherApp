import LocationController from './LocationController.js';
import fireAlert from '../UIComponents/alert.js';

export default async function getData(location) {
    //returns a JSON containing location's data
    return await fetchData(location);
}


async function fetchData(location) {
    try {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${LocationController.getAPIKey()}`, {mode: 'cors'})
        const obj = await data.json();
        return obj;
    } catch(error) {
        fireAlert("Please reload the page.");
        return undefined;
    }
}