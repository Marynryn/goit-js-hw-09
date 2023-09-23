const formEl = document.querySelector(".form");
const delayEl = document.getElementsByName("delay");
const starEl = document.getElementsByName("step");
const amountEl = document.getElementsByName("amount");
const btn = document.querySelector("button");

formEl.addEventListener("submit", amountEl * createPromise);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    const timerId = setTimeout(() => {
      console.log("I love async JS!");
    }, delayEl);
  } else {
    // Reject
  }
}
