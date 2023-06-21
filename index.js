let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let homeBoard = 0;
let guestBoard = 0;

function onepointH() {
  homeBoard += 1;
  scoreHome.textContent = homeBoard;
}
function twopointH() {
  homeBoard += 2;
  scoreHome.textContent = homeBoard;
}
function threepointH() {
  homeBoard += 3;
  scoreHome.textContent = homeBoard;
}

function onepointG() {
  guestBoard += 1;
  scoreGuest.textContent = guestBoard;
}
function twopointG() {
  guestBoard += 2;
  scoreGuest.textContent = guestBoard;
}
function threepointG() {
  guestBoard += 3;
  scoreGuest.textContent = guestBoard;
}
function newGame() {
  scoreGuest.textContent = 0;
  scoreHome.textContent = 0;
  homeBoard = 0;
  guestBoard = 0;
}

let previousGames = document.getElementById("previous-games");
function saveGame() {
  let allGames =
    " Home Score = " + homeBoard + " - Guest Score = " + guestBoard + " | ";
  previousGames.textContent += allGames;
  scoreGuest.textContent = 0;
  scoreHome.textContent = 0;
  homeBoard = 0;
  guestBoard = 0;
}
