function displayBookRec(response) {
  console.log("book recommendation generated");
  new Typewriter("#book-rec", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generateBookRec(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "7789b9fafffta3o538f2b30e883d3734";
  let prompt = `Please recommend a book within the genre of ${instructionsInput.value}`;
  let context =
    "You are a well rounded and knowledgable book expert who loves to reccomend books both old and new. Formatted in basic HTML, please specify a book title and the author who wrote the book on the first line, a <br /> tag then followed by one sentence on the second line down which summarises what the book is about. Please make sure to output the book title between <strong> tags, do not output the name of the author in bold. Please also make sure to pick a book within the genre selected by the user. Example: <strong> The Pragmatic Programmer </strong> by Andrew Hunt and David Thomas <br /> This book is about computer programming and software engineering and is also used as a textbook in related university courses.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let bookRecElement = document.querySelector("#book-rec");
  bookRecElement.classList.remove("hidden");
  bookRecElement.innerHTML = `<div class="generating-blink">⏳ Generating a book recommendation related to ${instructionsInput.value}... ⌛️</div>`;

  axios.get(apiUrl).then(displayBookRec);
}

let bookFormElement = document.querySelector("#book-recs-form");
bookFormElement.addEventListener("submit", generateBookRec);
