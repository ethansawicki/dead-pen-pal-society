import { getStoredLetters } from './dataAccess.js'

const storedLetters = (letters) => {
    return `
        <div class="sent_Message">
        <p>Sent to: <b>${letters.recipient}</b></p>
        <p>From: <b>${letters.author}</b></p>
        <p>Subject: ${letters.topic}</p>
        <p>${letters.body}</p>
        <p>${letters.todayDate}</p>
        </div>
    `
}

export const showLetters = () => {
    const letters = getStoredLetters();
    let html = `
        <div class="stored_letters">
        ${
            letters.map(storedLetters).join("")
        }
    `
    return html
}