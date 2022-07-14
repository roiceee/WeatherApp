import sample from '../assets/sample.png'

export default async function loadMainInfoHolder() {
        const weatherForecastContainer = document.getElementById('weather-forecast-container');
        weatherForecastContainer.append(await createMainInfoHolder());
}


function createMainInfoHolder() {
    return new Promise(resolve => {
        const DOMString = `
        <div id="forecast-div-row" class="row mx-0">
                    <div id="forecast-container" class="col-11 mx-auto bg-dark bg-opacity-50 p-2">
                        <div id="main-info">
                        <h2 id="location-name">Davao City</h2>
                        <img src="${sample}" alt="sample" id="main-icon" class="d-block mx-auto mt-3">
                        <h4 id="forecast-text" class="text-center mt-2">Weather Forecast</h4>
                        <hr>
                    </div>
    
                    <div id="details" class="mt-3">
                        <h5 id="description" class="my-1">N/A</h5>
                        <div class="row">
                            <div class="col">
                                <p id="cloudiness" class="my-1">N/A</p>
                                <p id="feels-like" class="my-1">N/A</p>
                                <p id="pressure" class="my-1">N/A</p>
                            </div>
                            <div class="col">
                                <p id="humidity" class="my-1">N/A</p>
                                <p id="visibility" class="my-1">N/A</p>
                                <p id="rain" class="my-1">N/A</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>`
        resolve(document.createRange().createContextualFragment(DOMString));
    })
}