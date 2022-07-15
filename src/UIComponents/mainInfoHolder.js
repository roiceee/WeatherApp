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
        <div id="forecast-div-row" class="row mx-0 gap-2">
                    <div id="forecast-container" class="col col-11 col-md-6 mx-auto mx-sm-2 bg-dark bg-opacity-50 p-2">
                        <div id="main-info" class="row">
                            <div id="right" class="col-7 text-center">
                                <h1 id="location-name" class="text-center">---</h1>
                                <img src="#" alt="weather icon" id="main-icon" class="d-block mx-auto mt-2">
                                <h4 id="temperature" class="mt-2">---</h4>
                                <h5 id="description" class="my-1">---</h5>
                            </div>

                            <div id="left" class="col-4 my-auto">
                                <h4>About the data</h4>
                                <h6>The weather forecast data used in this application is from OpenWeather.org. 
                                    <span>
                                        <a href="https://openweathermap.org/" class="text-light">See more.</a>
                                    </span>
                                </h6>
                            </div>
                        
                        </div>
                        <hr>
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
                    </div>
                    <div class="col col-11 col-md-6 mx-auto mx-sm-2 bg-dark bg-opacity-50 p-2">
                    <h2>YOW</h2>
                    </div>
                </div>`
        resolve(document.createRange().createContextualFragment(DOMString));
    })
}