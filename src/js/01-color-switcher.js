const bodyEl = document.querySelector("body");
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;

  }

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    let colorValue = getRandomHexColor()
    bodyEl.style.backgroundColor = colorValue;
    
  }, 1000);
  startBtn.setAttribute("disabled", true);
}

);


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.removeAttribute("disabled");

});