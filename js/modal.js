
/* modal */

const createNewWallet = document.querySelector(".aside__action");
const modalWrap = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

createNewWallet.addEventListener("click", function () {
    modalWrap.classList.add("modal-open");
    body.classList.remove("--scroll-on");
    body.classList.add("--scroll-off");
});

modalWrap.addEventListener("click", (e) => {
    // при клике в любом месте окна браузера
    const target = e.target; // находим элемент, на котором был клик
    if (!target.closest(".modal-content")) {
        modalWrap.classList.remove("modal-open");
        body.classList.add("--scroll-on");
        body.classList.remove("--scroll-off");
    }
});