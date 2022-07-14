function convertKelvinToCelsius(kelvin) {
    kelvin = Number(kelvin);
    return (kelvin - 273.15).toFixed(0);
}

function convertMeterToKM(meter) {
    meter = Number(meter);
    return meter / 1000;
}

export {convertKelvinToCelsius, convertMeterToKM};