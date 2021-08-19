const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menu__list");
const body = document.querySelector("body")
const togglePasswordList = document.querySelectorAll(".text-field__icon");
// const pastePassword = document.querySelector(".text-field__paste");
const typeList = document.querySelectorAll(".password");

window.addEventListener("load", function () {
  setTimeout(function () {
    // This hides the address bar:
    window.scrollTo(0, 1);
  }, 0);
});

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menuList.classList.toggle('active')
  body.classList.toggle('--scroll-off')
})

for (let i = 0; i < togglePasswordList.length; i++) {
  togglePasswordList[i].addEventListener('click', function (event) {
    const currentInput = this.parentNode.querySelector('.text-field__input');
    const currentType = currentInput.getAttribute('type') === 'password' ? 'text' : 'password';
    currentInput.setAttribute('type', currentType);
    this.classList.toggle("view");
  });
}
