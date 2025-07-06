const choices = document.querySelectorAll<HTMLButtonElement>(".choice");
const gameSection = document.querySelector(".game") as HTMLElement;
const resultSection = document.getElementById("result") as HTMLElement;
const resultText = document.getElementById("result-text") as HTMLElement;
const playerPick = document.getElementById("player-pick") as HTMLElement;
const userPick = document.getElementById("user-pick") as HTMLElement;
const playAgainBtn = document.getElementById("play-again") as HTMLButtonElement;

const modal = document.getElementById("modal") as HTMLDivElement;
const openModalBtn = document.getElementById("openModal") as HTMLButtonElement;
const closeModalBtn = document.getElementById("closeModal") as HTMLButtonElement;

const images: Record<string, string> = {
  qogoz: "img/qogoz.svg",
  qaychi: "img/qaychi.svg",
  tosh: "img/tosh.svg"
};

// Random user tanlovi
function getUserChoice(): "qogoz" | "qaychi" | "tosh" {
  const arr = ["qogoz", "qaychi", "tosh"];
  return arr[Math.floor(Math.random() * arr.length)] as "qogoz" | "qaychi" | "tosh";
}

// G‘olib aniqlash
function checkWinner(player: string, user: string): "win" | "lose" | "draw" {
  if (player === user) return "draw";
  const rules: Record<string, string> = {
    qogoz: "tosh",
    qaychi: "qogoz",
    tosh: "qaychi"
  };
  return rules[player] === user ? "win" : "lose";
}

// O'yin boshlanganda
choices.forEach((btn) => {
  btn.addEventListener("click", () => {
    const player = btn.dataset.choice!;
    const user = getUserChoice();
    const result = checkWinner(player, user);

    // Rasm chiqarish
    playerPick.innerHTML = `<img src="${images[player]}" alt="${player}">`;
    userPick.innerHTML = `<img src="${images[user]}" alt="${user}">`;

    // Natija
    if (result === "win") resultText.textContent = "Yutdingiz";
    else if (result === "lose") resultText.textContent = "Yutqazdingiz";
    else resultText.textContent = "Durang";

    gameSection.classList.add("hidden");
    resultSection.classList.remove("hidden");
  });
});

// Play again
playAgainBtn.addEventListener("click", () => {
  resultSection.classList.add("hidden");
  gameSection.classList.remove("hidden");
});

// Modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
