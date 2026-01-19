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
  "photos/photo3.jpeg",
  "photos/photo4.jpeg",
  "photos/photo5.jpeg",
  "photos/photo6.jpeg",
  "photos/photo7.jpeg",
  "photos/photo8.jpeg"
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
  "My heart chose you 💞",
  "Every day with you is my favorite 🌸",
  "You make my world softer 💕",
  "I still choose you, every single day 💖",
  "You are my calm and my chaos 🩷",
  "With you, everything feels right 💗"
];

const randomIndex = Math.floor(Math.random() * messages.length);
document.getElementById("loveMessage").innerText = messages[randomIndex];

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.innerText = "🎵 Pause Music";
  } else {
    music.pause();
    musicBtn.innerText = "🎵 Play Music";
  }
});


