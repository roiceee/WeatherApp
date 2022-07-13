export default async function loadContainers() {
    const body = document.body;
    const mainContainer = await createMainContainer();
    body.appendChild(mainContainer);
    const container = document.getElementById('main-container');
    container.append(await createNavbarContainer());
    container.append(await createWeatherForecastContainer());
}

function createMainContainer() {
   return new Promise((resolve) => {
    const DOMString = `<div id="main-container" class="container-fluid gx-0 text-light"></div>`;
    resolve(document.createRange().createContextualFragment(DOMString));
})
}

function createNavbarContainer() {
    return new Promise((resolve) => {
   const DOMString =  `<div id="navbar-container" class="bg-dark bg-opacity-50 gx-0"></div>`;
   resolve(document.createRange().createContextualFragment(DOMString));
})
}

function createWeatherForecastContainer() {
    return new Promise((resolve) => {
        const DOMString = `<div id="weather-forecast-container" class="container-fluid mt-3">`;
        resolve(document.createRange().createContextualFragment(DOMString));
})
}