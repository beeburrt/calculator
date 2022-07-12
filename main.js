const topDisplay = document.querySelector(".top-display");
const mainDisplay = document.querySelector(".main-display");

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);

const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", back);

const operators = ["÷", "×", "−", "=", "+", "."];

let currentValue = "";
let previousValue = "";
let operator = "";
let result;
let historyArray = [];

topDisplay.textContent = "";
mainDisplay.textContent = "0";

const numberBtns = document.getElementsByClassName("number");
const numberBtnsArr = [...numberBtns];
const dotBtn = document.querySelector(".dot");

numberBtnsArr.forEach((button) => {
  button.addEventListener("click", () => {
    const { innerText: btnValue } = button;
    if (mainDisplay.textContent == "0" && btnValue != ".") {
      mainDisplay.textContent = " ";
    }
    if (!(btnValue == ".") || !historyArray.includes(".")) {
      mainDisplay.innerText += button.innerText;
      historyArray.push(button.innerText);
      currentValue = mainDisplay.innerText;
      console.log();
    }
  });
});

const operatorBtns = document.getElementsByClassName("operator");
const operatorBtnsArr = [...operatorBtns];

operatorBtnsArr.forEach((button) => {
  button.addEventListener("click", (e) => {
    const { innerText: btnValue } = button;
    if (
      historyArray.includes("÷") ||
      historyArray.includes("×") ||
      historyArray.includes("−") ||
      historyArray.includes("=") ||
      historyArray.includes("+") ||
      historyArray.includes(".")
    ) {
      // button.innerText = "";
      console.log(btnValue);
    }
    if (
      !(
        historyArray.includes("÷") ||
        historyArray.includes("×") ||
        historyArray.includes("−") ||
        historyArray.includes("=") ||
        historyArray.includes("+") ||
        historyArray.includes(".")
      )
    ) {
      mainDisplay.innerText += button.innerText;
      historyArray.push(btnValue);
    }
  });
});

function clear() {
  topDisplay.textContent = "";
  mainDisplay.textContent = "0";
  historyArray = [];
}

function back() {
  historyArray.pop();
  currentValue = historyArray.join("");
  console.log(currentValue);
  mainDisplay.innerText = currentValue;
  if (currentValue == "" || currentValue == ".") {
    mainDisplay.textContent = "0";
    historyArray.pop();
    console.log(historyArray);
  }
}

function updateDisplay(button) {
  mainDisplay.textContent += button.innerText;
}

function calculate() {
  currentValue = parseFloat(currentValue);
  previousValue = parseFloat(previousValue);
  currentValue = mainDisplay.textContent = result;
}

function add() {
  return Number(previousValue) + Number(currentValue);
}
