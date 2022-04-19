import { getAuthors } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("change", changeEvent => {
    if (changeEvent.target.name === "authors_list") {
        const authorSelect = document.querySelector("select[name='authors_list']").value
        const testObj ={
            author: authorSelect
        }
        console.log(testObj)   
    }
})

const allAuthors = (authorList) => {
    return `
    <option id="${authorList.id}">${authorList.name}</option>
    `

}


export const showAuthors = () => {
   const authors = getAuthors();
   let html = `
        <label for="authors_list">Choose Author:</label>
        <select name="authors_list" class="authors_list">
            ${
                authors.map(allAuthors).join("")
            }
        </select>
        
   `
   return html
}