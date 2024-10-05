'use strict';
function firstTask() {
  const categories = document.querySelector('#categories');
  const categoriesList = categories.children;
  console.log('Number of categories: ', categoriesList.length);
  for (const child of categoriesList) {
    console.log('Category: ', child.firstElementChild.textContent);
    console.log('Elements: ', child.lastElementChild.children.length);
  }
}

firstTask();
