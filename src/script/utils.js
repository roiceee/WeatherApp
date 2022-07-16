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

function launchSpinner() {
    const DOMString = `
    <div class="spinner-container position-fixed vh-100 vw-100 d-flex justify-content-center align-items-center">
    <div class="spinner-border text-light mb-5" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div>`
    
    document.body.appendChild(document.createRange().createContextualFragment(DOMString));
}

function deleteSpinner() {
    document.querySelector('.spinner-container').remove();
}

export {convertKelvinToCelsius, convertMeterToKM, hideUI, displayUI, launchSpinner, deleteSpinner};