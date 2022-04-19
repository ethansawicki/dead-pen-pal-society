import { letterState, sendLetter } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "send_Letter_Button") {
        const letterBody = document.querySelector("textarea[name='text_input']").value
        
        const sentLetterToAPI = {
            body: letterBody
        }
        sendLetter(sentLetterToAPI)
    }
})

export const textInput = () => {
    const textbox = letterState();
    let html = `
        <textarea class="text_input" value="${textbox}" name="text_input"></textarea>
    ` 
    return html
}

export const damnButton = () => {
    return `<button id="send_Letter_Button">Do Something</button>`
}

