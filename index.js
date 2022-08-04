let store = Redux.createStore(reducer);

let counter = document.querySelector('.count');
let btn5 = document.querySelector('.btn-5');
let btn10 = document.querySelector('.btn-10');
let btn15 = document.querySelector('.btn-15');
let btnMax15 = document.querySelector('.btn-max-15');
let btnMax100 = document.querySelector('.btn-max-100');
let btnMax200 = document.querySelector('.btn-max-200');
let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let reset = document.querySelector('.reset');

let fixSteps = 1;
let maxValue = Infinity;

increment.addEventListener(`click`, () => {
  store.dispatch({ type: 'increment', step: fixSteps || 1 });
});

decrement.addEventListener(`click`, () => {
  store.dispatch({ type: 'decrement', step: fixSteps || 1 });
});

reset.addEventListener(`click`, () => {
  store.dispatch({ type: 'reset' });
  btn5.classList.remove(`active`);
  btn10.classList.remove(`active`);
  btn15.classList.remove(`active`);
  btnMax15.classList.remove(`active`);
  btnMax100.classList.remove(`active`);
  btnMax200.classList.remove(`active`);
  fixSteps = 1;
  maxValue = Infinity;
});

store.subscribe(() => {
  counter.innerText = store.getState();
});

function reducer(state = 0, action) {
  switch (action.type) {
    case 'increment':
      return state + action.step <= maxValue ? state + action.step : state;
    case 'decrement':
      return state - action.step >= 0 ? state - action.step : state;
    case 'reset':
      return 0;
    default:
      return state;
  }
}

btn5.addEventListener(`click`, () => {
  btn5.classList.add(`active`);
  btn10.classList.remove(`active`);
  btn15.classList.remove(`active`);
  fixSteps = 5;
});
btn10.addEventListener(`click`, () => {
  btn5.classList.remove(`active`);
  btn10.classList.add(`active`);
  btn15.classList.remove(`active`);
  fixSteps = 10;
});
btn15.addEventListener(`click`, () => {
  btn5.classList.remove(`active`);
  btn10.classList.remove(`active`);
  btn15.classList.add(`active`);
  fixSteps = 15;
});
btnMax15.addEventListener(`click`, () => {
  btnMax15.classList.add(`active`);
  btnMax100.classList.remove(`active`);
  btnMax200.classList.remove(`active`);
  maxValue = 15;
});
btnMax100.addEventListener(`click`, () => {
  btnMax15.classList.remove(`active`);
  btnMax100.classList.add(`active`);
  btnMax200.classList.remove(`active`);
  maxValue = 100;
});
btnMax200.addEventListener(`click`, () => {
  btnMax15.classList.remove(`active`);
  btnMax100.classList.remove(`active`);
  btnMax200.classList.add(`active`);
  maxValue = 200;
});
