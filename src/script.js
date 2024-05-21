function generateBookRec(event) {
  event.preventDefault();

  new Typewriter("#book-rec", {
    strings: "The Pragmatic Programmer by Andrew Hunt and David Thomas.",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let bookFormElement = document.querySelector("#book-recs-form");
bookFormElement.addEventListener("submit", generateBookRec);
