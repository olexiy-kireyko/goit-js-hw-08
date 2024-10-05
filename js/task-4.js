'use strict';

function fourthTask() {
  const userForm = document.querySelector('.login-form');

  userForm.addEventListener('submit', event => {
    event.preventDefault();
    const userObj = {};
    if (
      event.target.elements.email.value.trim() &&
      event.target.elements.password.value.trim()
    ) {
      userObj.email = event.target.elements.email.value.trim();
      userObj.password = event.target.elements.password.value.trim();
      console.log(userObj);
      event.target.reset();
    } else {
      alert('All form fields must be filled in');
    }
  });
}

fourthTask();
