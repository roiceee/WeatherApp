export default function fireAlert(message) {
    document.body.append(createAlert(message));
    setTimeout(() => {
        document.getElementById('close-alert').click();
    }, 5000)
}

function createAlert(message) {
    const DOMString = `
    <div class="alert alert-warning alert-dismissible fade show fixed-top mx-auto" role="alert">
        <strong>Error!</strong> ${message}.
        <button type="button" id="close-alert" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    return document.createRange().createContextualFragment(DOMString);
}