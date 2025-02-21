// Quotes for greeting section
const quotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Success starts with self-discipline.",
    "Don’t stop until you’re proud.",
    "Your body can stand almost anything. It’s your mind that you have to convince.",
    "Wake up. Work out. Look hot. Kick ass."
];

// Display a random quote
function displayQuote() {
    const quoteElement = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerText = quotes[randomIndex];
}

// Redirect to profile page
function goToProfile() {
    window.location.href = "profile.html";
}

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Run functions on page load
document.addEventListener("DOMContentLoaded", displayQuote);