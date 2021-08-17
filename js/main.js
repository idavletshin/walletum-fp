const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menu__list");
const body = document.querySelector("body")
const togglePassword = document.querySelector(".text-field__icon");
const passwd = document.querySelector(".password");

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menuList.classList.toggle('active')
  body.classList.toggle('--scroll-off')
})

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  this.classList.toggle("view");
});

// window.function(){
//   document.getElementsByTagName("body")[0].style.height = window.innerHeight + 'px';
// }