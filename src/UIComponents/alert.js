export default function fireAlert(message) {
    document.body.append(createAlert(message));
    setTimeout(() => {
        const element = document.getElementById('close-alert');
        if(typeof(element) != 'undefined' && element != null) {
            element.click();
        }
    }, 8000)
}

function createAlert(message) {
    const DOMString = `
    <div class="alert alert-warning alert-dismissible fade show fixed-top mx-auto" role="alert">
        <strong>Warning!</strong> ${capitalizeFirstLetter(message)}.
        <button type="button" id="close-alert" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    return document.createRange().createContextualFragment(DOMString);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}