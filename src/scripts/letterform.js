import { showAuthors } from "./authors.js";
import { showRecipients } from "./recipients.js";
import { showTopics } from "./topics.js";
import { textInput, damnButton } from "./textinput.js";


export const letterForm = () => {
    return `
        <h1>Pen Pal Society</h1>

            <h2>Author</h2>
                <div>
                    ${showAuthors()}
                </div>
            <h2>Letter</h2>
                <div>
                    ${textInput()}
                </div>
            <h2>Topics</h2>
                <div>
                    ${showTopics()}
                </div>
            <h2>Recipient</h2>
                <div>
                    ${showRecipients()}
                </div>
            <h2>Dont Do It</h2>
                <div>
                    ${damnButton()}
                </div>
            <h2>Sent Letters</h2>
                <div>
                   Soon&trade;
                </div>
    `
}