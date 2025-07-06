"use strict";
const choices = document.querySelectorAll(".choice");
const gameSection = document.querySelector(".game");
const resultSection = document.getElementById("result");
const res = document.getElementById("res");
const oyin = document.getElementById("oyin");
const userPick = document.getElementById("user");
const playAgainBtn = document.getElementById("play-again");
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("ruless");
const closeModalBtn = document.getElementById("xX");
const images = {
    qogoz: "img/qogoz.svg",
    qaychi: "img/qaychi.svg",
    tosh: "img/tosh.svg"
};
function getUserChoice() {
    const arr = ["qogoz", "qaychi", "tosh"];
    return arr[Math.floor(Math.random() * arr.length)];
}
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
choices.forEach((btn) => {
    btn.addEventListener("click", () => {
        const player = btn.dataset.choice;
        const user = getUserChoice();
        const result = checkWinner(player, user);
        oyin.innerHTML = `<img src="${images[player]}" alt="${player}">`;
        userPick.innerHTML = `<img src="${images[user]}" alt="${user}">`;
        if (result === "win")
            res.textContent = "Yutdingiz";
        else if (result === "lose")
            res.textContent = "Yutqazdingiz";
        else
            res.textContent = "Durang";
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
    if (e.target === modal)
        modal.style.display = "none";
});
