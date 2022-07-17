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
                            <div id="forecast-left" class="col col-12 col-md-6">
                                <div id="main-info" class="row">
                                    <div id="left" class="col-7 text-center">
                                        <h1 id="location-name" class="text-center">---</h1>
                                        <img src="#" alt="weather icon" id="main-icon" class="d-block mx-auto mt-2">
                                        <h4 id="temperature" class="mt-2">---</h4>
                                        <h5 id="description" class="my-1">---</h5>
                                    </div>
                                    <div id="right" class="col-4 my-auto">
                                        <h4>About the data</h4>
                                        <p>This application uses weather forecast data from OpenWeather. 
                                            <span>
                                                <a href="https://openweathermap.org/" class="text-light" target="_blank">See more.</a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <hr style="width: 90%" class="mx-auto">
                                <div id="details" class="mt-3 text-center">
                                    <div class="row row-cols-auto d-flex justify-content-center">
                                        <div class="mt-2">
                                            <img src="${cloudiness}" class="small-icon mb-2">
                                            <h6 class="label" class="my-1">Cloudiness:</h6>
                                            <p id="cloudiness" class="my-1">---</p>
                                        </div>
                                        <div class="mt-2">
                                            <img src="${pressure}" class="small-icon mb-2">
                                            <h6 class="label" class="my-1">Pressure:</h6>
                                            <p id="pressure" class="my-1">---</p>
                                        </div>
                                        <div class="mt-2">
                                            <img src="${windspeed}" class="small-icon mb-2">
                                            <h6 class="label" class="my-1">Wind speed:</h6>
                                            <p id="wind-speed" class="my-1">---</p>
                                        </div>
                                        <div class="mt-2">
                                            <img src="${humidity}" class="small-icon mb-2">
                                            <h6 class="label" class="my-1">Humidity:</h6>
                                            <p id="humidity" class="my-1">---</p>
                                        </div>
                                        <div class="mt-2">
                                            <img src="${visibility}" class="small-icon mb-2">
                                            <h6 class="label" class="my-1">Visibility:</h6>
                                            <p id="visibility" class="my-1">---</p>
                                        </div>
                                    </div>
                                </div>
                                <div style="width: 90%; height: 2px; background-color: white; opacity: 50%;" class="mx-auto my-4 remove-hr"> </div>
                            </div>
                            <div class="vr"></div>

                            <div id="forecast-right" class="col col-12 col-md-5 px-4 mx-auto">
                                <div id="five-day-forecast-heading" class="mt-2"> 
                                    <h5 id="location-name-1">---</h5>
                                    <p>5-day weather forecast</p>
                                    <p>12:00 A.M. of each day</p>
                                </div>

                                <div id="five-day-forecast-content" class="row row-cols-1 row-cols-sm-3 d-flex justify-content-center mt-3">
                                        <div class="text-center mt-2 ">
                                            <h6 class="forecast-date">---</h6>
                                            <img src="#" class="forecast-icon">
                                            <p class="forecast-temperature">---</p>
                                            <p class="forecast-description">---</p>
                                            <hr style="width: 90%" class="mx-auto remove-hr-1">
                                        </div>
                                        <div class="text-center mt-2 mb-3">
                                            <h6 class="forecast-date">---</h6>
                                            <img src="#" class="forecast-icon">
                                            <p class="forecast-temperature">---</p>
                                            <p class="forecast-description">---</p>
                                            <hr style="width: 90%" class="mx-auto remove-hr-1">
                                        </div>
                                        <div class="text-center mt-2 mb-3">
                                            <h6 class="forecast-date">---</h6>
                                            <img src="#" class="forecast-icon">
                                            <p class="forecast-temperature">---</p>
                                            <p class="forecast-description">---</p>
                                            <hr style="width: 90%" class="mx-auto remove-hr-1">
                                        </div>
                                        <div class="text-center mt-2 mb-3">
                                            <h6 class="forecast-date">---</h6>
                                            <img src="#" class="forecast-icon">
                                            <p class="forecast-temperature">---</p>
                                            <p class="forecast-description">---</p>
                                            <hr style="width: 90%" class="mx-auto remove-hr-1">
                                        </div>
                                        <div class="text-center mt-2 mb-3">
                                            <h6 class="forecast-date">---</h6>
                                            <img src="#" class="forecast-icon">
                                            <p class="forecast-temperature">---</p>
                                            <p class="forecast-description">---</p>
                                        </div>
                                </div>
                            </div>
                        <div class="row">
                    </div>
            </div>`
        resolve(document.createRange().createContextualFragment(DOMString));
    })
}