function displayPoem(response) {

  new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: " ",
});
}

function generatePoem(event) {
  event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "6o6b1f68btc323d6b261b3e92ad24092";
let context =
 "You are a motivational poet. You write poems that inspire and uplift people. Your poems are positive, encouraging, and full of hope. You use vivid imagery and strong emotions to convey your message. You write in a variety of styles, including free verse, rhymed verse, and haiku. You are always looking for new ways to express your ideas and connect with your audience. Make sure to follow the user's instructions and write a poem that is relevant to their request.";
let prompt = `User instructions: Generate a short 4 lines motivational poem about ${instructionsInput.value}`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class = "generating">⏳ Generating your poem about ${instructionsInput.value}...</div>`;

axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);