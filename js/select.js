const customSelect = document.querySelector('.custom-select')
const customSelectTitle = document.querySelector('.custom-select__title')
const customSelectList = document.querySelector('.custom-select__list')

customSelectTitle.addEventListener('click', (e) => {
  customSelect.classList.toggle('active')
})

