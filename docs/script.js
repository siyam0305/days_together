// Calculate days together
const startDate = new Date("2023-02-19");
const today = new Date();

const diffTime = today - startDate;
const daysTogether = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("days").innerText = daysTogether + " days 💕";

// Floating emojis
const emojis = ["💕", "💖", "🩷", "💗"];
const emojiContainer = document.querySelector(".emojis");

setInterval(() => {
  const span = document.createElement("span");
  span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = (4 + Math.random() * 4) + "s";

  emojiContainer.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 6000);
}, 300);
