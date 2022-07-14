

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
                        <h1 id="location-name" class="text-center">---</h1>
                        <img src="#" alt="sample" id="main-icon" class="d-block mx-auto mt-2">
                        <h4 id="temperature" class="text-center mt-2">---</h4>
                        <hr>
                    </div>
    
                    <div id="details" class="mt-3">
                        <h5 id="description" class="my-1">---</h5>
                        <div class="row">
                            <div class="col-6">
                                <p id="cloudiness" class="my-1">---</p>
                                <p id="pressure" class="my-1">---</p>
                                <p id="wind-speed" class="my-1">---</p>
                            </div>
                            <div class="col-6">
                                <p id="humidity" class="my-1">---</p>
                                <p id="visibility" class="my-1">---</p>
                                <p id="rain" class="my-1">---</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>`
        resolve(document.createRange().createContextualFragment(DOMString));
    })
}