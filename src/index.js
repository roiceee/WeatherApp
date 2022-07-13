import loadHeadFiles from "./UIComponents/initial"; './UIComponents/head.js';
import './script/bootstrap.min.js';
import './stylesheet/bootstrap.min.css';
import './stylesheet/styles.css';
import loadContainers from "./UIComponents/containers";
import loadNavBar from "./UIComponents/navbar";
import loadFooter from "./UIComponents/footer";



async function initialLoad() {
    loadHeadFiles();
    await loadContainers();
    loadNavBar();
    loadFooter();
}

initialLoad();
