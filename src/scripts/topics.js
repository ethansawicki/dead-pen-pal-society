import { getTopics } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.name === "topic_checked") {
    const topicSelection = document.querySelector(
      "input[name='topic']:checked"
    ).value;
  }
});

const allTopics = (topics) => {
  return `
    <input type="radio" name="topic_checked" id="${topics.id}">
    <label for="topic">${topics.topic}</label>
    `;
};

export const showTopics = () => {
  const topics = getTopics();
  let html = `
        ${topics.map(allTopics).join("")}
    `;
  return html;
};