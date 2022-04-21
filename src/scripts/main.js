import { fetchAuthors, fetchRecipients, fetchTopics, retrieveLetter} from "./dataAccess.js";
import { letterForm } from "./letterform.js";


const mainContainer = document.querySelector('#container');

// const renderSite = () => {
//     fetchRecipients()
//     .then(() => 
//         fetchTopics()
//     )    
//     .then(() =>
//         fetchAuthors()
//     )
//     .then(() =>
//         retrieveLetter()
//     )
//     .then(
//         () => {
//             mainContainer.innerHTML = letterForm()
//         }
//     )
// }
// renderSite();



const renderSiteAsync = async() => {
   await Promise.all([fetchAuthors(), fetchRecipients(), fetchTopics(), retrieveLetter()])
    mainContainer.innerHTML = letterForm()
}
renderSiteAsync()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        renderSiteAsync()
    })