let userScore = 0;
let cpuScore = 0;
let tieScore = 0;

function playGame(user) {
  const options = ["s", "w", "g"];
  const cpu = options[Math.floor(Math.random() * 3)];

  document.getElementById("userChoice").innerText =
    "Your Choice: " + fullForm(user);

  document.getElementById("cpuChoice").innerText =
    "CPU Choice: " + fullForm(cpu);

  if (user === cpu) {
    tieScore++;
    document.getElementById("result").innerText = "It's a Tie 😐";
  } else if (
    (user === "s" && cpu === "w") ||
    (user === "w" && cpu === "g") ||
    (user === "g" && cpu === "s")
  ) {
    userScore++;
    document.getElementById("result").innerText = "You Win 😎";
  } else {
    cpuScore++;
    document.getElementById("result").innerText = "CPU Wins 😢";
  }

  updateScore();
}

function updateScore() {
  document.getElementById("userScore").innerText = userScore;
  document.getElementById("cpuScore").innerText = cpuScore;
  document.getElementById("tieScore").innerText = tieScore;
}

function resetGame() {
  userScore = 0;
  cpuScore = 0;
  tieScore = 0;

  document.getElementById("userChoice").innerText = "Your Choice: -";
  document.getElementById("cpuChoice").innerText = "CPU Choice: -";
  document.getElementById("result").innerText = "Result will appear here";

  updateScore();
}

function fullForm(choice) {
  if (choice === "s") return "Snake 🐍";
  if (choice === "w") return "Water 💧";
  if (choice === "g") return "Gun 🔫";
}
