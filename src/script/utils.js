function convertKelvinToCelsius(kelvin) {
    kelvin = Number(kelvin);
    return (kelvin - 273.15).toFixed(0);
}

function convertMeterToKM(meter) {
    meter = Number(meter);
    return meter / 1000;
}

function hideUI() {
    document.getElementById('forecast-container').style.display = "none";
}

function displayUI() {
    document.getElementById('forecast-container').style.display = "block";
}


export {convertKelvinToCelsius, convertMeterToKM, hideUI, displayUI};