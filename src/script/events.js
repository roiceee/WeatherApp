import { renderLocation } from "./renderData";


function addSearchButtonListener() {
    const button = document.getElementById('search-button');
    const form = document.querySelector('form');
    button.addEventListener('click',  (e) => {
        e.preventDefault();
        searchEvent(form);
    })
    form.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            button.click();
        }
    })
}

const debounce = (func, wait = 500) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

const searchEvent = debounce(
    function(form) {
        const value = document.getElementById('search-bar').value.trim();
        form.reset();
        renderLocation(value);
})


export {addSearchButtonListener}