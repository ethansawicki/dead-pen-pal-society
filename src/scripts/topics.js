import { getTopics } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.name === "topic_checked") {
    const topicSelection = document.querySelector(
      "input[name='topic_checked']"
    ).value;
  }
});

const allTopics = (topics) => {
  return `
    <input type="radio" value="${topics.topic}" name="topic_checked" id="topic_checked_${topics.id}">
    <label for="topic_checked_${topics.id}">${topics.topic}</label>
    `;
};

export const showTopics = () => {
  const topics = getTopics();
  let html = `
        ${topics.map(allTopics).join("")}
    `;
  return html;
};