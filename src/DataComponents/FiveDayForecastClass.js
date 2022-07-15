export default function createFiveDayForecastArray(locationName, forecastDataArray) {
    return new FiveDayForecast(locationName, forecastDataArray)
}

class FiveDayForecast {
    constructor(locationName, forecastDataArray) {
        this.locationName = locationName;
        this.forecastDataArray = forecastDataArray;
    }

    getLocationName() {
        return this.locationName;
    }

    getForecastDataArray() {
        this.forecastDataArray;
    }
}