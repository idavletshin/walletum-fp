const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menu__list");
const body = document.querySelector("body")
const showHidePasswd = document.querySelector(".text-field__icon");
const passwd = document.querySelector(".password");

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menuList.classList.toggle('active')
  body.classList.toggle('--scroll-off')
})

showHidePasswd.addEventListener("click", function () {
  if (passwd.getAttribute("type") == "password") {
    showHidePasswd.classList.remove("view");
    passwd.setAttribute("type", "text");
  } else {
    showHidePasswd.classList.add("view");
    passwd.setAttribute("type", "password");
  }
});

// window.function(){
//   document.getElementsByTagName("body")[0].style.height = window.innerHeight + 'px';
// }