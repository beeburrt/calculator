const topDisplay = document.querySelector(".top-display");
const mainDisplay = document.querySelector(".main-display");

let memory = [];

let firstValue;
let nextValue;
let result;

topDisplay.textContent = "";
mainDisplay.textContent = "";

const clearBtn = document.querySelector(".clear");

const deleteBtn = document.querySelector(".delete");

const numberBtns = Array.from(document.getElementsByClassName("number"));
const operatorBtns = Array.from(document.getElementsByClassName("operator"));

console.log(numberBtns);

clearBtn.addEventListener("click", clear);

deleteBtn.addEventListener("click", back);

numberBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    memory.push(button.innerText);
    // updateDisplay(button);
    console.log(memory);
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    updateDisplay(button);
  });
});

function clear(e) {
  topDisplay.textContent = "";
  mainDisplay.textContent = "";
}

function back(e) {
  memory.pop();
  console.log(memory);
}

function updateDisplay(button) {
  topDisplay.textContent = memory.values;
  mainDisplay.innerText += button.innerText;
}

function calculate() {
  // if (operator === "+") {

  // }

  mainDisplay.innerText = result;
}
