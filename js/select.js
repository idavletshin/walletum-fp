const customSelect = document.querySelector('.custom-select')
const customSelectTitle = document.querySelector('.custom-select__text')
const customSelectList = document.querySelector('.custom-select__list')

customSelectTitle.addEventListener('click', (e) => {
  customSelect.classList.toggle('active')
})

