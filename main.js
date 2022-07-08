const topDisplay = document.querySelector(".upper-display");
topDisplay.textContent = "fuck you ken";
const display = document.querySelector(".main-display");
display.textContent = "fuck you ken";

const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const btnClass = e.target.getAttribute("class");
    if (btnClass.includes("clear")) {
      clear();
    }
  });
});

function clear(e) {
  topDisplay.textContent = "";
  display.textContent = "";
}
