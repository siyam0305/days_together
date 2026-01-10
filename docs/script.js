// Relationship start date
const startDate = new Date("2023-02-19T00:00:00");

// Update live timer
function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);

// Floating hearts
const emojis = ["💕", "💖", "🩷", "💗"];
const emojiContainer = document.querySelector(".emojis");

setInterval(() => {
  const span = document.createElement("span");
  span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  emojiContainer.appendChild(span);

  setTimeout(() => span.remove(), 6000);
}, 300);

// Photo slideshow
const photos = [
  "photos/photo1.jpeg",
  "photos/photo2.jpeg",
  "photos/photo3.jpeg"
];
let index = 0;
setInterval(() => {
  index = (index + 1) % photos.length;
  document.getElementById("slide").src = photos[index];
}, 3000);

// Daily love message
const messages = [
  "I love you more every day 💖",
  "You are my forever 🩷",
  "Life is beautiful with you 💕",
  "You are my safe place 💗",
  "My heart chose you 💞"
];

const dayIndex = Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24));
document.getElementById("loveMessage").innerText = messages[dayIndex % messages.length];
