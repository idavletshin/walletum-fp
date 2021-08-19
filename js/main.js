const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menu__list");
const body = document.querySelector("body")
const togglePasswordList = document.querySelectorAll(".text-field__icon");
const typeList = document.querySelectorAll(".password");
// const document = document.documentElement;

/* Function to open fullscreen mode */
// function openFullscreen() {
//   if (document.requestFullscreen) {
//     document.requestFullscreen();
//   } else if (document.mozRequestFullScreen) { /* Firefox */
//     document.mozRequestFullScreen();
//   } else if (document.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
//     document.webkitRequestFullscreen();
//   } else if (document.msRequestFullscreen) { /* IE/Edge */
//     document.msRequestFullscreen();
//   }
// }

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



// window.function(){
//   document.getElementsByTagName("body")[0].style.height = window.innerHeight + 'px';
// }