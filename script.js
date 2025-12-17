const API_URL = "https://dummyjson.com/quotes/random";

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btn = document.getElementById("btn");

async function getQuote() {
  try {
    btn.disabled = true;
    btn.textContent = "Loading...";

    const response = await fetch(API_URL);
    const data = await response.json();

    quoteEl.textContent = data.quote;
    authorEl.textContent = "— " + data.author;

  } catch (error) {
    quoteEl.textContent = "Failed to load quote 😢";
    authorEl.textContent = "";
    console.error(error);
  } finally {
    btn.disabled = false;
    btn.textContent = "🔄 Generate New Quote";
  }
}

btn.addEventListener("click", getQuote);