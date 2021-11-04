
/* modal */

const createNewWalletButton = document.querySelector(".aside__create-btn");
const modal = document.querySelectorAll(".modal");
const dataImportModal = document.getElementById('dataImportModal')
const dataImportButton = document.getElementById('dataImportButton')
const createNewWalletModal = document.getElementById('createNewWalletModal')

function showModal() {
  body.classList.remove("--scroll-on");
  body.classList.add("--scroll-off");
}

createNewWalletButton.addEventListener("click", function () {
  showModal()
  createNewWalletModal.style.display = 'block'
});

dataImportButton.addEventListener("click", function () {
  showModal()
  dataImportModal.style.display = 'block'
});

modal.forEach((el) => {
  el.addEventListener('click', (e) => {
    const target = e.target;

    if (!target.closest(".modal-content")) {
      body.classList.add("--scroll-on");
      body.classList.remove("--scroll-off");

      dataImportModal.style.display = 'none'
      createNewWalletModal.style.display = 'none'
    }

    if (target.closest(".close-btn")) {
      body.classList.add("--scroll-on");
      body.classList.remove("--scroll-off");

      createNewWalletModal.style.display = 'none'
    }
  })
})
