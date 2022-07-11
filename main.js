const topDisplay = document.querySelector(".top-display");
const mainDisplay = document.querySelector(".main-display");

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);

const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", back);

const numberBtns = Array.from(document.getElementsByClassName("number"));
const operatorBtns = Array.from(document.getElementsByClassName("operator"));

let currentValue;
let previousValue;
let operator;
let result;
let memArray = [];

topDisplay.textContent = "";
mainDisplay.textContent = "";

numberBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    mainDisplay.innerText += button.innerText;
    memArray.push(button.innerText);
    previousValue = mainDisplay.innerText;
    console.log(memArray);
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    // updateDisplay(button);
    console.log(e.target);
  });
});

function clear() {
  topDisplay.textContent = "";
  mainDisplay.textContent = "";
}

function back() {
  memArray.pop();
  currentValue = memArray.join("");
  console.log(currentValue);
  mainDisplay.innerText = currentValue;
}

function updateDisplay(button) {
  mainDisplay.innerText += button.innerText;
}

function calculate() {
  mainDisplay.innerText = result;
}

function add() {
  return Number(previousValue) + Number(currentValue);
}
