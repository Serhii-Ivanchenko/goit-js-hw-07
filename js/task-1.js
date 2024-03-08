const categoriesListEl = document.querySelector('#categories');
const categoryEl = document.querySelectorAll('.item');
const categoriesTitlesEl = document.querySelectorAll('.item h2');
const categoryListEl = document.querySelectorAll('.item ul');

function calcCategories(element) {
  return `Number of categories: ${element.children.length}`;
}
console.log(calcCategories(categoriesListEl));

function getCategoryInfo(arr) {
  return arr.forEach((element, index) => {
    console.log(`Category: ${element.textContent}`);
    console.log(`Elements: ${categoryListEl[index].children.length}`);
  });
}

getCategoryInfo(categoriesTitlesEl);
