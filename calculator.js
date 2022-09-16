let spanEl1 = document.getElementById("span-el1");
let spanEl2 = document.getElementById("span-el2");
let totalEl = document.getElementById("total-el");

let num1 = getRandomNum();
let num2 = getRandomNum();

spanEl1.textContent = num1;
spanEl2.textContent = num2;

function getRandomNum() {
  let randomNum = Math.floor(Math.random() * 9) + 1;
  return randomNum;
}

function add() {
  let result = num1 + num2;
  totalEl.textContent = "Total: " + result;
}

function subtract() {
  let result = num1 - num2;
  totalEl.textContent = "Total: " + result;
}

function divide() {
  let result = num1 / num2;
  totalEl.textContent = "Total: " + result;
}

function multiply() {
  let result = num1 * num2;
  totalEl.textContent = "Total: " + result;
}

function reset() {
  let result = 0;
  totalEl.textContent = "Total: " + result;
}
