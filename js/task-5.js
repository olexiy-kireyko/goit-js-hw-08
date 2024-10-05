'use strict';

function fifthTask() {
  const btn = document.querySelector('.change-color');
  const color = document.querySelector('.color');
  btn.addEventListener('click', event => {
    const random = getRandomHexColor();
    document.body.style.backgroundColor = `${random}`;
    color.textContent = random;
  });
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

fifthTask();
