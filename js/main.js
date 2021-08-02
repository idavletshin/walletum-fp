const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menu__list");
const body = document.querySelector("body")

const seedWallet = document.querySelector(".wallet-card.--yellow-border")

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menuList.classList.toggle('active')
  body.classList.toggle('--scroll-off')
})

seedWallet.addEventListener('click', () => {
  window.location.href = 'step3.html';
})