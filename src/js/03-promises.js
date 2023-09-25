import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector(".form");


formEl.addEventListener("submit", submitForm);



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3; 
  return new Promise((resolve, reject) => {
  setTimeout(() =>{
  if (shouldResolve) {
     resolve(position, delay);}
     else{
      reject(position, delay); }
    }, delay);

});}





function submitForm (event){
  // event.preventDefault;
  let delay  = formEl.delay.value
  console.log(formEl.amount.value)
  for (let i = 1; i <= formEl.amount.value; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay +=  formEl.step.value;
  }
}



