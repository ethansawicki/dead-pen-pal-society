import { fetchAuthors, fetchRecipients, fetchTopics} from "./dataAccess.js";
import { letterForm } from "./letterform.js";


const mainContainer = document.querySelector('#container');

const renderSite = () => {
    fetchRecipients()
    fetchTopics()
    fetchAuthors()
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

