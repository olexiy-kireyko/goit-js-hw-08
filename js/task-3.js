'use strict';

function thirdTask() {
  const nameInput = document.querySelector('#name-input');
  const nameOutput = document.querySelector('#name-output');
  nameInput.addEventListener('input', event => {
    const text = event.target.value.trim();
    if (text) {
      nameOutput.textContent = text;
    } else {
      nameOutput.textContent = 'Anonymous';
    }
  });
}

thirdTask();
