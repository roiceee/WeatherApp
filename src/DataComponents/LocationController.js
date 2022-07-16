import LocalStorageController from "./LocalStorageController";

export default (function LocationController() {
    const APIKey = '41228b4a2fa8e854b26bf872b8e36b31';
    let localStorageKey = "location";
    let defaultLocation;
    defaultLocation = LocalStorageController.getData(localStorageKey) === null ? defaultLocation = "Manila" 
                            : defaultLocation = LocalStorageController.getData(localStorageKey);
    console.log(defaultLocation)
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
    }
})();

