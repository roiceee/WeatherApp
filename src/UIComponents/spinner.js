function launchSpinner() {
    const DOMString = `
    <div class="spinner-container position-fixed vh-100 vw-100 d-flex justify-content-center align-items-center">
    <div class="spinner-border text-light mb-5" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div>`
    
    document.body.appendChild(document.createRange().createContextualFragment(DOMString));
}

function deleteSpinner() {
    document.querySelector('.spinner-container').remove();
}

export {launchSpinner, deleteSpinner}