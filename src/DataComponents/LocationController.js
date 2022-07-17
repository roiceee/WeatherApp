import LocalStorageController from "./LocalStorageController";
import fireAlert from "../UIComponents/alert";

export default (function LocationController() {
    const APIKey = '41228b4a2fa8e854b26bf872b8e36b31';
    let localStorageKey = "location";
    let defaultLocation;
    defaultLocation = LocalStorageController.getData(localStorageKey) === null ? defaultLocation = "Manila" 
                            : defaultLocation = LocalStorageController.getData(localStorageKey);
    
    const getCurrentLocation = function() {
        return new Promise(resolve => {
            let latitude;
        let longitude;
            if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition((position) => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                 resolve({"isValid": true, "lat": latitude,"lon": longitude});
             }, showError); 
            } else {
              fireAlert("Geolocation is not supported by this browser.");
              resolve({"isValid": false, "lat": latitude,"lon": longitude});
            }
            function showError(error) {
                switch(error.code) {
                  case error.PERMISSION_DENIED:
                    fireAlert("You disabled request for Geolocation for this site.");
                    break;
                  case error.POSITION_UNAVAILABLE:
                    fireAlert("Location information is unavailable.");
                    break;
                  case error.TIMEOUT:
                    fireAlert("The request to get user location timed out.");
                    break;
                  case error.UNKNOWN_ERROR:
                    fireAlert("An unknown error occurred.");
                    break;
                }  
                resolve({"isValid": false, "lat": latitude,"lon": longitude});
    }
        })
        
}
    const getDefaultLocation = function() {
        return defaultLocation;
    }
    const getAPIKey = function() {
        return APIKey;
    }
    const setDefaultLocation  = function(location) {
        defaultLocation = location;
        LocalStorageController.saveData(localStorageKey, location);
    }
    return {
        setDefaultLocation,
        getDefaultLocation,
        getAPIKey,
        getCurrentLocation
    }
})();

