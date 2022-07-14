//initial location is Davao
import createLocation from "./LocationClass.js";
export default (function LocationController() {
    const APIKey = '41228b4a2fa8e854b26bf872b8e36b31';
    const defaultLocation = createLocation("Mati", 6.9551, 126.2166);
    const getDefaultLocation = function() {
        return defaultLocation;
    }
    const getAPIKey = function() {
        return APIKey;
    }
    return {
        getDefaultLocation,
        getAPIKey
    }
})();