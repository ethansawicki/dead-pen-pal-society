import { letterState, sendLetter } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "send_Letter_Button") {
        const letterBody = document.querySelector("textarea[name='text_input']").value
        const author = document.querySelector("select[name='authors_list']").value
        const recipient = document.querySelector("select[name='recipients_list']").value
        const topic = document.querySelector("input[name='topic_checked']:checked").value
        const date = new Date()
        const sentLetterToAPI = {
            recipient: recipient,
            author: author,
            body: letterBody,
            topic: topic,
            todayDate: date.toLocaleString('en-US')
        }
        sendLetter(sentLetterToAPI)
        console.log(date)
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

