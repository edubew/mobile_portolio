// Gain access  to the harmburger button and the mobile menu list

const hamburger = document.querySelector('.hamburger');
const navbarLink = document.querySelector('.navbar-link');
const logo = document.querySelector('.logo');
let click = 1;

// Add an event listener to the hamburger menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbarLink.classList.toggle('active');
  if (click === 1) {
    logo.innerText = '';
    click -= 1;
  } else {
    logo.innerText = 'Edube';
    click += 1;
  }
});

document.querySelectorAll('.nav-links').forEach((e) => e.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navbarLink.classList.remove('active');
  logo.innerText = 'Edube';
  click += 1;
}));
