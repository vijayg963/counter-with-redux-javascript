const store = Redux.createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const store = Redux.createStore(reducer);
let counter = store.getState();
let step = store.getState();

let h1 = document.querySelector('h1');
let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let reset = document.querySelector('.reset');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');

h1.innerText = counter;

first.addEventListener('click', () => {
  store.dispatch({ type: 'increment', step: 5 });
});

second.addEventListener('click', () => {
  store.dispatch({ type: 'increment', step: 15 });
});

third.addEventListener('click', () => {
  store.dispatch({ type: 'increment', step: 25 });
});

increment.addEventListener('click', () => {
  store.dispatch({ type: 'increment' });
});
decrement.addEventListener('click', () => {
  store.dispatch({ type: 'decrement' });
});
reset.addEventListener('click', () => {
  store.dispatch({ type: 'reset' });
});

store.subscribe(() => {
  counter = store.getState();
  h1.innerText = counter;
});

function reducer(state = 0, action) {
  switch (action.type) {
    case 'increment':
      return state + (action.step || 1);
    case 'decrement':
      return state - (action.step || 1);
    case 'reset':
      return 0;
    default:
      return state;
  }
}
