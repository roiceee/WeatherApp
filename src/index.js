import loadHeadFiles from "./UIComponents/initial"; './UIComponents/head.js';
import './script/bootstrap.min.js';
import './stylesheet/bootstrap.min.css';
import './stylesheet/styles.css';
import './DataComponents/LocationController.js';
import loadContainers from "./UIComponents/containers";
import loadNavBar from "./UIComponents/navbar";
import loadFooter from "./UIComponents/footer";
import loadMainInfoHolder from "./UIComponents/mainInfoHolder";
import {renderDefaultLocation} from "./script/appLogic.js";


async function initialLoad() {
    loadHeadFiles();
    await loadContainers();
    loadNavBar();
    loadFooter();
    await loadMainInfoHolder();
    renderDefaultLocation();
    
}

initialLoad();
