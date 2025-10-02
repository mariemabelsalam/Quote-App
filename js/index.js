const btn = document.querySelector("button");
const quote = document.querySelector(".quote h2");
const author = document.querySelector(".author");

let quotes = [
  {
    quote: "“Things change. And friends leave. Life doesn't stop for anybody.” ",
    author: "-- Stephen Chbosky",
  },
  {
    quote: "“It's not what happens to you, but how you react to it that matters.“",
    author: "-- Deb Sofield",
  },
  {
    quote: "“You cannot control the behavior of others, but you can always choose how you respond to it.”",
    author: "-- Roy T.Bennett",
  },
  {
    quote: "“The most important thing is to enjoy your life—to be happy—it's all that matters.”",
    author: "-- Audrey Hepburn",
  },
  {
    quote: "“Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.”",
    author: "-- mlk mlodj",
  },
  {
    quote: "“the scary part is that people don't realize how much they've changed .”",
    author: "-- Simone Elkeles",
  },
  {
    quote: "“Life becomes easier and more beautiful when we can see the good in other people.”",
    author: "-- psmo skwod",
  },
];

let displayQuotes = [];

btn.addEventListener("click", function () {
  getQuotes();
});

function getQuotes() {
  if (displayQuotes.length === quotes.length) {
    displayQuotes = [];
  }

  let currIndex;
  do {
    currIndex = Math.floor(Math.random() * quotes.length);
  } while (displayQuotes.includes(currIndex));

  displayQuotes.push(currIndex);

  quote.innerHTML = quotes[currIndex].quote;
  author.innerHTML = quotes[currIndex].author;
}