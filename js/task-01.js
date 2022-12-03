
const categoriesItemEl = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesItemEl.length}`);

categoriesItemEl.forEach(category => {
    const titleOfItemEl = category.querySelector("h2");
    console.log(`Category: ${titleOfItemEl.textContent}`);

    const listOfItemEl = category.querySelectorAll('li');
    console.log(`Elements: ${listOfItemEl.length}`);
})