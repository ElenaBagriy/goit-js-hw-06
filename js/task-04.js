const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const baseValue = document.querySelector('#value');

let counterValue = 0;

const decrementValue = () => {
    counterValue -= 1;
    baseValue.textContent = counterValue;
};

const incrementValue = () => {
    counterValue += 1;
    baseValue.textContent = counterValue;
};

decrementButton.addEventListener("click", decrementValue);
incrementButton.addEventListener("click", incrementValue);