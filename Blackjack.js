let sum = 0;
let cards = [];

let hasBlackJack = false;
let isActive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let greetingEl = document.getElementById("greeting-el");

function startGame() {
  isActive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];

  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = " You've got a Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isActive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}

function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
}
