import icon from '../assets/weather-icons/cloudiness.png';
import background from '../assets/background.jpeg';

export default function loadInitialFiles() {
    document.querySelector('title').textContent = "WeatherApp";
    document.querySelector('head').appendChild(createIconLink());
    setBackground();
}

function createIconLink() {
    const linkTag = document.createElement('link');
    linkTag.setAttribute('rel', "shortcut icon");
    linkTag.setAttribute('href', icon);
    linkTag.setAttribute('type', 'image/x-icon');
    return linkTag;
}

//background: fixed is not supported in safari
function setBackground() {
    if(isSafari()) {
        return;
    }
    document.body.style.backgroundImage = `url(${background})`;
}


function isSafari() {
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    {
        return false;
    }
    else if(navigator.userAgent.indexOf("Edg") != -1 )
    {
        return false;
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        return false;
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        return true;
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
        return false;
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
        return false;
    }  
    else 
    {
       return false;
    }
}