const burgerToggle = document.getElementById('toggle')
const mainSection = document.querySelector('.main')

burgerToggle.addEventListener('click', () => {
  if (burgerToggle.checked) {
    mainSection.classList.add('main-bg')
  } else {
    mainSection.classList.remove('main-bg')
  }
})