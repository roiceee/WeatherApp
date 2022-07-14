import { convertMeterToKM, convertKelvinToCelsius } from "../script/converter";
export default function createForecast(locationName, mainIcon, forecastText, description, cloudiness, temperature, pressure, humidity, visibility, rain, windspeed) {
    return new Forecast(locationName, mainIcon, forecastText, description, cloudiness, temperature, pressure, humidity, visibility, rain, windspeed);
}

class Forecast {
    constructor(locationName, mainIcon, forecastText, description, cloudiness, temperature, pressure, humidity, visibility, rain, windspeed) {
        // console.log(locationName + "\n" + mainIcon + "\n" + forecastText + "\n" + description + "\n" + 
        // cloudiness + "\n" + temperature + "\n" + pressure + "\n" + humidity + "\n" + visibility + "\n" + rain + "\n" + windspeed)


        locationName === undefined ? this.locationName = "N/A" : this.locationName = locationName;
        mainIcon === undefined ? this.mainIcon = "N/A" : this.mainIcon = mainIcon;
        forecastText === undefined ? this.forecastText = "N/A" : this.forecastText = forecastText;
        description === undefined ? this.description = "N/A" : this.description = description;
        cloudiness === undefined ? this.cloudiness = "N/A" : this.cloudiness = cloudiness;
        temperature === undefined ? this.temperature = "N/A" : this.temperature = convertKelvinToCelsius(temperature);
        pressure === undefined ? this.pressure = "N/A" : this.pressure = pressure;
        humidity === undefined ? this.humidity = "N/A" : this.humidity = humidity;
        visibility === undefined ? this.visibility = "N/A" : this.visibility = convertMeterToKM(visibility);
        rain === undefined ? this.rain = "N/A" : this.rain = rain;
        windspeed === undefined ? this.windspeed = "N/A" : this.windspeed = windspeed
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

    getTemperature() {
        return this.temperature;
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
    
    getWindspeed() {
        return this.windspeed;
    }

    printDetails() {
        console.log(this.locationName + "\n" + this.mainIcon + "\n" + this.forecastText + "\n" + this.description + "\n" + 
        this.cloudiness + "\n" + this.temperature + "\n" + this.pressure + "\n" + this.humidity + "\n" + this.visibility + "\n" + this.rain + "\n" + this.windspeed)
    }
}