//initial location is Davao

export default (function LocationController() {
    const APIKey = '41228b4a2fa8e854b26bf872b8e36b31';
    const defaultLocation = "Mati";

    const getDefaultLocation = function() {
        return defaultLocation;
    }
    const getAPIKey = function() {
        return APIKey;
    }
    return {
        getDefaultLocation,
        getAPIKey,
    }
})();

