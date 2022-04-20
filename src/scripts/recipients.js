import { getRecipients } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.name === "recipients_list") {
    const recipientSelect = document.querySelector(
      "select[name='recipients_list']"
    ).value;
  }
});

const allRecipients = (recipients) => {
  return `
    <option id="${recipients.id}">${recipients.name}</option>
    `;
};

export const showRecipients = () => {
  const recipient = getRecipients();
  let html = `
        <label for="recipients_list">Choose Recipient:</label>
        <select name="recipients_list" class="recipients_list">
            ${recipient.map(allRecipients).join("")}
        </select>
        
   `;
  return html;
};
