import cloudiness from '../assets/weather-icons/cloudiness.png';
import humidity from '../assets/weather-icons/humidity.png';
import pressure from '../assets/weather-icons/pressure.png';
import visibility from '../assets/weather-icons/visibility.png';
import windspeed from '../assets/weather-icons/windspeed.png';

export default async function loadMainInfoHolder() {
        const weatherForecastContainer = document.getElementById('weather-forecast-container');
        weatherForecastContainer.append(await createMainInfoHolder());
}


function createMainInfoHolder() {
    return new Promise(resolve => {
        const DOMString = `
        <div id="forecast-div-row" class="row mx-auto">
                    <div id="forecast-container" class="col col-11 mx-auto bg-dark bg-opacity-50 p-2">
                        <div class="row">
                            <div id="forecast-left" class="col col-12 col-sm-6">
                                <div id="main-info" class="row">
                                    <div id="left" class="col-7 text-center">
                                        <h1 id="location-name" class="text-center">---</h1>
                                        <img src="#" alt="weather icon" id="main-icon" class="d-block mx-auto mt-2">
                                        <h4 id="temperature" class="mt-2">---</h4>
                                        <h5 id="description" class="my-1">---</h5>
                                    </div>
                                    <div id="right" class="col-4 my-auto">
                                        <h4>About the data</h4>
                                        <h6>The weather forecast data used in this application is from OpenWeather.org. 
                                            <span>
                                                <a href="https://openweathermap.org/" class="text-light">See more.</a>
                                            </span>
                                        </h6>
                                    </div>
                                </div>
                                <hr style="width: 90%" class="mx-auto">
                                <div id="details" class="mt-3 text-center">
                                    <div class="row row-cols-auto d-flex justify-content-center">
                                        <div>
                                            <img src="${cloudiness}" class="weather-icon">
                                            <h6 class="label" class="my-1">Cloudiness:</h6>
                                            <p id="cloudiness" class="my-1">---</p>
                                        </div>
                                        <div>
                                            <img src="${pressure}" class="weather-icon">
                                            <h6 class="label" class="my-1">Pressure:</h6>
                                            <p id="pressure" class="my-1">---</p>
                                        </div>
                                        <div>
                                            <img src="${windspeed}" class="weather-icon">
                                            <h6 class="label" class="my-1">Wind speed:</h6>
                                            <p id="wind-speed" class="my-1">---</p>
                                        </div>
                                        <div>
                                            <img src="${humidity}" class="weather-icon">
                                            <h6 class="label" class="my-1">Humidity:</h6>
                                            <p id="humidity" class="my-1">---</p>
                                        </div>
                                        <div>
                                            <img src="${visibility}" class="weather-icon">
                                            <h6 class="label" class="my-1">Visibility:</h6>
                                            <p id="visibility" class="my-1">---</p>
                                        </div>
                                    </div>
                                </div>
                                <hr style="width: 90%" class="mx-auto">
                            </div>
                            
                            <div id="forecast-right" class="col col-12 col-sm-5"> 
                            <h5>Sample content</h5>
                            </div>
                        <div class="row">
                    </div>
            </div>`
        resolve(document.createRange().createContextualFragment(DOMString));
    })
}