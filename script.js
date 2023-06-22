const talkgo = document.querySelector('.talkgo');
const navLink = document.querySelector('.nav__link');

talkgo.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});