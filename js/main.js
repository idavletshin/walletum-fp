const burgerToggle = document.getElementById('toggle')
const mainSection = document.querySelector('.main')

burgerToggle.addEventListener('click', () => {
  if (burgerToggle.checked) {
    mainSection.classList.add('main-bg')
  } else {
    mainSection.classList.remove('main-bg')
  }
})

const screenWidth = window.screen.width
const screenHeight = window.screen.height

const availableScreenWidth = window.screen.availWidth
const availableScreenHeight = window.screen.availHeight

const windowOuterWidth = window.outerWidth
const windowOuterHeight = window.outerHeight

const windowInnerWidth = window.innerWidth
const windowInnerHeight = window.innerHeight

const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight

console.log(pageWidth);
console.log(pageHeight);