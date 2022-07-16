export default (function LocalStorageController() {

    const saveData = function(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    const getData = function(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    return {
        saveData,
        getData
    }
})();