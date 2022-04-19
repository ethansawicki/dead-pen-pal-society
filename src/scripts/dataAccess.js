const applicationState = {
  authors: [],
  topics: [],
  recipient: [],
  letters: [],
};

const API = "http://localhost:3033";
const mainContainer = document.querySelector("#container");

export const fetchAuthors = () => {
  return fetch(`${API}/authors`)
    .then((response) => response.json())
    .then((authors) => {
      applicationState.authors = authors;
    });
};

export const fetchRecipients = () => {
  return fetch(`${API}/recipients`)
    .then((response) => response.json())
    .then((recipients) => {
      applicationState.recipient = recipients;
    });
};

export const fetchTopics = () => {
  return fetch(`${API}/topics`)
    .then((response) => response.json())
    .then((topic) => {
      applicationState.topics = topic;
    });
};

export const sendLetter = (sentLetter) => {
  const fetchOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sentLetter),
  };
  return fetch(`${API}/sentLetters`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};

// export const retrieveLetter = () => {
//   return fetch(`${API}/sentLetters`)
//   .then((response) => response.json())
//   .then((storedLetters) => {
//     return storedLetters
//   })
// }

export const letterState = () => {
  return applicationState.letters.map((letter) => ({ ...letter }));
};

export const getTopics = () => {
  return applicationState.topics.map((topic) => ({ ...topic }));
};

export const getRecipients = () => {
  return applicationState.recipient.map((recipient) => ({ ...recipient }));
};

export const getAuthors = () => {
  return applicationState.authors.map((author) => ({ ...author }));
};
