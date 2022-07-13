export default function loadNavBar() {
    const DOMString = `
            <nav class="navbar navbar-dark bg-opacity-50 gx-0 px-3 px-sm-0">
                <div class="container">
                  <a class="navbar-brand">Weather App</a>
                  <form class="d-flex" role="search">
                    <input class="form-control me-2 rounded-pill" type="search" placeholder="Search location" aria-label="Search">
                    <button class="btn btn-outline-light" type="submit">Search</button>
                  </form>
                </div>
            </nav>
              `
   const container = document.getElementById('navbar-container');
   container.appendChild(document.createRange().createContextualFragment(DOMString));
}