import { fetchAuthors, fetchRecipients, fetchTopics, retrieveLetter} from "./dataAccess.js";
import { letterForm } from "./letterform.js";


const mainContainer = document.querySelector('#container');

const renderSite = () => {
    fetchRecipients()
    fetchTopics()
    fetchAuthors()
    retrieveLetter()
    .then(
        () => {
            mainContainer.innerHTML = letterForm()
        }
    )
}
renderSite();
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        renderSite()
    })

