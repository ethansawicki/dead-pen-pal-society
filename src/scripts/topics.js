import { getTopics } from "./dataAccess.js";



const allTopics = (topics) => {
  return `
    <input type="radio" name="topic" value="${topics.id}">
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