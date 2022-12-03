const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const arrayOfIngredientItemEl = [];

ingredients.forEach(ingredient => {
  const ingredientItemEl = document.createElement("li");
  ingredientItemEl.textContent = ingredient;
  ingredientItemEl.classList.add("item");
  arrayOfIngredientItemEl.push(ingredientItemEl);
})

ingredientsList.prepend(...arrayOfIngredientItemEl);