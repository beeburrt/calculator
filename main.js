const topDisplay = document.querySelector(".top-display");
const mainDisplay = document.querySelector(".main-display");

topDisplay.innerText = "";
mainDisplay.innerText = "0";

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);

const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", back);

const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", () => {
  calculateResult();
  updateDisplay();
});

let currentValue = "";
let previousValue = "";
let operator = "";
let operation;

const numberBtns = document.getElementsByClassName("number");
const numberBtnsArr = [...numberBtns];

const dotBtn = document.querySelector(".dot");

numberBtnsArr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (currentValue === 0 || currentValue === "0") {
      currentValue = "";
    }

    if (button.textContent == "." && currentValue.includes(".")) return;
    currentValue += button.textContent;

    updateDisplay();
  });
});

const operatorBtns = document.getElementsByClassName("operator");
const operatorBtnsArr = [...operatorBtns];

operatorBtnsArr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (currentValue === "") return;
    if (button.textContent == "÷") operation = "/";
    if (button.textContent == "×") operation = "*";
    if (button.textContent == "−") operation = "-";
    if (button.textContent == "+") operation = "+";
    operate();
    updateDisplay();
  });
});

function updateDisplay() {
  mainDisplay.innerText = currentValue;
  topDisplay.innerText = previousValue;
}

function operate() {
  if (currentValue === "") return;
  if (previousValue !== "") {
    calculateResult();
  }
  if (operation === "/") operation = "÷";
  if (operation === "*") operation = "×";
  previousValue = `${currentValue} ${operation}`;
  currentValue = "";
}

function clear() {
  currentValue = 0;
  previousValue = "";
  operation = null;
  updateDisplay();
}

function back() {
  let temp;
  if (currentValue == "can't divide by zero!") {
    currentValue = 0;
    temp = currentValue;
  } else {
    temp = currentValue.toString().slice(0, -1);
  }

  if (temp === "" || temp === 0) {
    temp = 0;
    currentValue = temp;
    updateDisplay();
  } else {
    currentValue = parseFloat(temp);
    updateDisplay();
  }
}

function calculateResult() {
  let current = parseFloat(currentValue);
  let previous = parseFloat(previousValue);
  let result;
  if (isNaN(current) || isNaN(previous)) return;
  if (operation == "-") {
    result = previous - current;
  } else if (operation == "+") {
    result = previous + current;
  } else if (operation == "×") {
    result = previous * current;
  } else if (operation == "÷" && current === 0) {
    result = "can't divide by zero!";
  } else if (operation == "÷") {
    result = previous / current;
  }

  currentValue = result;
  operation = null;
  previousValue = "";
}
