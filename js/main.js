const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menu__list");
const body = document.querySelector("body")
const togglePasswordList = document.querySelectorAll(".text-field__icon");
const typeList = document.querySelectorAll(".password");

/* Function to open fullscreen mode */
function openFullscreen() {
  if (body.requestFullscreen) {
    body.requestFullscreen();
  } else if (body.mozRequestFullScreen) { /* Firefox */
    body.mozRequestFullScreen();
  } else if (body.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    body.webkitRequestFullscreen();
  } else if (body.msRequestFullscreen) { /* IE/Edge */
    body.msRequestFullscreen();
  }
}

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



// window.function(){
//   document.getElementsByTagName("body")[0].style.height = window.innerHeight + 'px';
// }