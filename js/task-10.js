const divBoxes = document.querySelector('#boxes');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const amountOfBoxes = document.querySelector('#controls>input');
    
createButton.addEventListener('click', () => createBoxes(amountOfBoxes.value));

destroyButton.addEventListener('click', () => destroyBoxes());


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = amount => {
  const addedDivEl = [];

  for (let i = 0; i <= amount-1; i += 1) {
    const divToAdd = document.createElement("div");
    divToAdd.style.backgroundColor = getRandomHexColor();
    divToAdd.style.width = `${30 + 10 * (i-1)}px`;
    divToAdd.style.height = `${30 + 10 * (i-1)}px`;
    addedDivEl.push(divToAdd);
  }

  divBoxes.append(...addedDivEl);
  
}

const destroyBoxes = () => {
  divBoxes.innerHTML = ``;
  amountOfBoxes.value = ``;
}