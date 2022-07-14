class Location {
    constructor(name, lat, lon) {
        this.name = name;
        this.lat = lat;
        this.lon = lon;
    }
    getName() {
        return this.name;
    }
    getCoordinates() {
        const latitude = this.lat;
        const longitude = this.lon;
        return {latitude, longitude};
    }
}

export default function createLocation(name, lat, lon) {
    return new Location(name, lat, lon);
}