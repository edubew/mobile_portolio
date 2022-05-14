let personalInformation = {};
function contact() {
  personalInformation = {
    username: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    text: document.querySelector('#text').value,
  };

  localStorage.setItem('contactForm', JSON.stringify(personalInformation));
}
const checkLocalStorage = localStorage.getItem('contactForm');

if (checkLocalStorage) {
  document.querySelector('#name').value = JSON.parse(checkLocalStorage).username;
  document.querySelector('#email').value = JSON.parse(checkLocalStorage).email;
  document.querySelector('#text').value = JSON.parse(checkLocalStorage).text;
} else {
  document.querySelector('#name').onchange = () => {
    contact();
  };
  document.querySelector('#email').onchange = () => {
    contact();
  };
  document.querySelector('#text').onchange = () => {
    contact();
  };
}