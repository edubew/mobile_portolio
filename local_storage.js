// form object
const contactForm = {
  name: document.querySelector('#name').value,
  email: document.querySelector('#email').value,
  text: document.querySelector('#text').value,
};

// Store javascript objects in local storage
window.localStorage.setItem('contactForm', JSON.stringify(contactForm));

// Retrieve the previously saved object as a JSON string
const newForm = window.localStorage.getItem('contactForm');
