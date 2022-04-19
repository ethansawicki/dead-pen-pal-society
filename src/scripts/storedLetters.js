import { getStoredLetters } from './dataAccess.js'

const storedLetters = (letters) => {
    return `
        <div class="whatever">${letters.body}</div>
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