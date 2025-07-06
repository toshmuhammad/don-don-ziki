"use strict";
// Elementlar
const choices = document.querySelectorAll(".choice");
const gameSection = document.querySelector(".game");
const resultSection = document.getElementById("result");
const resultText = document.getElementById("result-text");
const playerPick = document.getElementById("player-pick");
const userPick = document.getElementById("user-pick");
const playAgainBtn = document.getElementById("play-again");
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
// Rasm manzillari
const images = {
    qogoz: "img/qogoz.svg",
    qaychi: "img/qaychi.svg",
    tosh: "img/tosh.svg"
};
// Random user tanlovi
function getUserChoice() {
    const arr = ["qogoz", "qaychi", "tosh"];
    return arr[Math.floor(Math.random() * arr.length)];
}
// G‘olib aniqlash
function checkWinner(player, user) {
    if (player === user)
        return "draw";
    const rules = {
        qogoz: "tosh",
        qaychi: "qogoz",
        tosh: "qaychi"
    };
    return rules[player] === user ? "win" : "lose";
}
// O'yin boshlanganda
choices.forEach((btn) => {
    btn.addEventListener("click", () => {
        const player = btn.dataset.choice;
        const user = getUserChoice();
        const result = checkWinner(player, user);
        // Rasm chiqarish
        playerPick.innerHTML = `<img src="${images[player]}" alt="${player}">`;
        userPick.innerHTML = `<img src="${images[user]}" alt="${user}">`;
        // Natija
        if (result === "win")
            resultText.textContent = "You Win!";
        else if (result === "lose")
            resultText.textContent = "You Lose!";
        else
            resultText.textContent = "Draw!";
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
    if (e.target === modal)
        modal.style.display = "none";
});
