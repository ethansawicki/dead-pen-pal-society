import { getRecipients } from "./dataAccess.js";


const allRecipients = (recipients) => {
  return `
    <option value="1">${recipients.name}</option>
    `;
};

export const showRecipients = () => {
  const recipient = getRecipients();
  let html = `
        <label for="recipient_list">Choose Recipient:</label>
        <select name="recipient_list" class="input">
            ${recipient.map(allRecipients).join("")}
        </select>
        
   `;
  return html;
};
