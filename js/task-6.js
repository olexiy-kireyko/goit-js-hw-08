'use strict';

function sixthTask() {
  const number = document.querySelector('#controls input');
  const create = document.querySelector('[data-create]');
  const destroy = document.querySelector('[data-destroy]');
  const boxes = document.querySelector('#boxes');

  create.addEventListener('click', () => {
    if (number.value <= 100) {
      destroyBoxes();
      createBoxes(number.value);
    }
  });

  function createBoxes(amount) {
    let htmlBoxes = '';
    for (let i = 1; i <= amount; i++) {
      htmlBoxes += `<div style=
      'width: ${30 + 10 * (i - 1)}px;
      height: ${30 + 10 * (i - 1)}px;
      background-color: ${getRandomHexColor()}'></div>`;
    }
    boxes.insertAdjacentHTML('afterbegin', htmlBoxes);
    number.value = '';
  }

  destroy.addEventListener('click', destroyBoxes);

  function destroyBoxes() {
    boxes.innerHTML = '';
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
}

sixthTask();
