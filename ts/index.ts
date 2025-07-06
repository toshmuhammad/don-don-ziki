const choices = document.querySelectorAll<HTMLButtonElement>(".choice");
const gameSection = document.querySelector(".game") as HTMLElement;
const resultSection = document.getElementById("result") as HTMLElement;
const res = document.getElementById("res") as HTMLElement;
const oyin = document.getElementById("oyin") as HTMLElement;
const userPick = document.getElementById("user") as HTMLElement;
const playAgainBtn = document.getElementById("play-again") as HTMLButtonElement;

const modal = document.getElementById("modal") as HTMLDivElement;
const openModalBtn = document.getElementById("ruless") as HTMLButtonElement;
const closeModalBtn = document.getElementById("xX") as HTMLButtonElement;

const images: Record<string, string> = {
  qogoz: "img/qogoz.svg",
  qaychi: "img/qaychi.svg",
  tosh: "img/tosh.svg"
};

function getUserChoice(): "qogoz" | "qaychi" | "tosh" {
  const arr = ["qogoz", "qaychi", "tosh"];
  return arr[Math.floor(Math.random() * arr.length)] as "qogoz" | "qaychi" | "tosh";
}

function checkWinner(player: string, user: string): "win" | "lose" | "draw" {
  if (player === user) return "draw";
  const rules: Record<string, string> = {
    qogoz: "tosh",
    qaychi: "qogoz",
    tosh: "qaychi"
  };
  return rules[player] === user ? "win" : "lose";
}

choices.forEach((btn) => {
  btn.addEventListener("click", () => {
    const player = btn.dataset.choice!;
    const user = getUserChoice();
    const result = checkWinner(player, user);

    oyin.innerHTML = `<img src="${images[player]}" alt="${player}">`;
    userPick.innerHTML = `<img src="${images[user]}" alt="${user}">`;

    if (result === "win") res.textContent = "Yutdingiz";
    else if (result === "lose") res.textContent = "Yutqazdingiz";
    else res.textContent = "Durang";

    gameSection.classList.add("hidden");
    resultSection.classList.remove("hidden");
  });
});

playAgainBtn.addEventListener("click", () => {
  resultSection.classList.add("hidden");
  gameSection.classList.remove("hidden");
});

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
