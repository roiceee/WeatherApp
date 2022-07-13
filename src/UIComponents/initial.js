import icon from '../assets/icon.jpg';
import background from '../assets/background.jpeg';

export default function loadInitialFiles() {
    document.querySelector('title').textContent = "WeatherApp";
    document.querySelector('head').appendChild(createIconLink());
    document.body.style.backgroundImage = `url(${background})`;
}
function createIconLink() {
    const linkTag = document.createElement('link');
    linkTag.setAttribute('rel', "shortcut icon");
    linkTag.setAttribute('href', icon);
    linkTag.setAttribute('type', 'image/x-icon');
    return linkTag;
}
