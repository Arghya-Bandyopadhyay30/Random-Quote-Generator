let quote = document.getElementById("quote")
let speaker = document.getElementById("speaker")
let btn = document.getElementById("btn")
const url = "https://api.quotable.io/random"

let generateQuote = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        quote.textContent = `${data.content}`;
        speaker.textContent = `${data.author}`;

        console.log(data.content);
        console.log(data.author);
    });
}

window.addEventListener("load", generateQuote);
btn.addEventListener("click", generateQuote);

