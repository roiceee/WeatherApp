export default function loadNavBar() {
    const DOMString = `
            <nav class="navbar navbar-dark bg-opacity-50 gx-0 px-3 py-2 px-sm-0">
                <div class="container">
                  <a class="navbar-brand">Weather App</a>
                  <form class="d-flex" role="search">
                    <input class="form-control rounded-pill mx-0" id="search-bar" type="text" placeholder="Search location" aria-label="Search">
                    <button class="btn d-flex" id="search-button" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                  </form>
                </div>
            </nav>
              `
   const container = document.getElementById('navbar-container');
   container.appendChild(document.createRange().createContextualFragment(DOMString));
}