const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const funnyPredictions = [
  "Hacking NASA for data 🚀",
  "Missed call from alien 👽",
  "Matrix orders pizza 🍕",
  "Fridge texts you 🧊📱",
  "Satellite retweets your selfie 📡",
  "Your cat learned to code 🐱💻",
  "Server went brr... and dropped loot 🎮",
  "Moon sent you a read-receipt 🌕",
  "AI asks for a loan 💸",
  "Secret level unlocked in your life 🕹️",
  "Your wifi says 'it's complicated' 💔",
  "Glitch in the matrix orders pizza 🍕",
  "Mysterious package arrives at midnight 📦",
  "Strange beeps in the backyard 🔊",
  "You receive 1 free cookie (IRL) 🍪"
];

const monthSelect = document.getElementById('monthSelect');
const predictBtn = document.getElementById('predictBtn');
const result = document.getElementById('result');

function getNextMonth(index) {
  return (parseInt(index) + 1) % 12;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function clearResults() {
  result.innerHTML = '';
}

function showPrediction() {
  clearResults();
  const selectedIndex = monthSelect.value;
  const nextIndex = getNextMonth(selectedIndex);
  const nextMonthName = months[nextIndex];

  // Create and show next month badge
  const nextMonthBadge = document.createElement('div');
  nextMonthBadge.className = 'badge';
  nextMonthBadge.textContent = `Next month: ${nextMonthName} 📅`;
  result.appendChild(nextMonthBadge);

  // Pick 3-5 unique funny predictions
  const count = Math.floor(Math.random() * 3) + 3; // 3 to 5
  const used = new Set();

  for (let i = 0; i < count; i++) {
    let prediction;
    do {
      prediction = pickRandom(funnyPredictions);
    } while (used.has(prediction));
    used.add(prediction);

    const badge = document.createElement('div');
    badge.className = 'badge';
    badge.textContent = prediction;
    result.appendChild(badge);
  }
}

predictBtn.addEventListener('click', () => {
  showPrediction();
  // Optional: focus result for screen readers
  result.focus();
});

// Initialize with default selection
document.addEventListener('DOMContentLoaded', () => {
  showPrediction();
});
