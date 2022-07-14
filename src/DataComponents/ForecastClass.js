export default function createForecast(locationName, mainIcon, forecastText, description, cloudiness, feelsLike, pressure, humidity, visibility, rain) {
    return new Forecast(locationName, mainIcon, forecastText, description, cloudiness, feelsLike, pressure, humidity, visibility, rain);
}

class Forecast {
    constructor(locationName, mainIcon, forecastText, description, cloudiness, feelsLike, pressure, humidity, visibility, rain) {
        console.log(locationName + "\n" + mainIcon + "\n" + forecastText + "\n" + description + "\n" + 
        cloudiness + "\n" + feelsLike + "\n" + pressure + "\n" + humidity + "\n" + visibility + "\n" + rain)


        locationName === undefined ? this.locationName = "N/A" : this.locationName = locationName;
        mainIcon === undefined ? this.mainIcon = "N/A" : this.mainIcon = mainIcon;
        forecastText === undefined ? this.forecastText = "N/A" : this.forecastText = forecastText;
        description === undefined ? this.description = "N/A" : this.description = description;
        cloudiness === undefined ? this.cloudiness = "N/A" : this.cloudiness = cloudiness;
        feelsLike === undefined ? this.feelsLike = "N/A" : this.feelsLike = feelsLike;
        pressure === undefined ? this.pressure = "N/A" : this.pressure = pressure;
        humidity === undefined ? this.humidity = "N/A" : this.humidity = humidity;
        visibility === undefined ? this.visibility = "N/A" : this.visibility = visibility;
        rain === undefined ? this.rain = "N/A" : this.rain = rain;
    }

    getLocationName() {
        return this.locationName;
    }

    getMainIcon() {
        return this.mainIcon;
    }

    getForecastText() {
        return this.forecastText;
    }

    getDescription() {
        return this.description;
    }

    getCloudiness() {
        return this.cloudiness;
    }

    getFeelsLike() {
        return this.feelsLike;
    }

    getPressure() {
        return this.pressure;
    }

    getHumidity() {
        return this.humidity;
    }

    getVisibility() {
        return this.visibility;
    }

    getRain() {
        return this.rain;
    }

    printDetails() {
        console.log(this.locationName + "\n" + this.mainIcon + "\n" + this.forecastText + "\n" + this.description + "\n" + 
        this.cloudiness + "\n" + this.feelsLike + "\n" + this.pressure + "\n" + this.humidity + "\n" + this.visibility + "\n" + this.rain)
    }
}