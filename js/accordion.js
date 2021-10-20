/* accordion */
function initAcc(elem, option) {
  document.addEventListener("click", (e) => {
    let accordionBtn;

    if (e.target.classList.contains("accordion-btn")) {
      accordionBtn = e.target;
    } else if (e.target.closest(".accordion-btn")) {
      accordionBtn = e.target.closest(".accordion-btn");
    } else {
      return;
    }

    if (!accordionBtn.matches(`${elem} .accordion-btn`)) return;

    if (!accordionBtn.parentElement.classList.contains("active")) {
      if (option === true) {
        const elementList = document.querySelectorAll(
          `${elem} .accordion-container`
        );
        Array.prototype.forEach.call(elementList, (e) => {
          e.classList.remove("active");
        });
      }
      accordionBtn.parentElement.classList.add("active");
    } else {
      accordionBtn.parentElement.classList.remove("active");
    }
  });
}

// activate accordion function
initAcc(".accordion", true);

/* accordion history list */

const historyList = document.querySelector(".history");
const showHideButtonArray = [...document.querySelectorAll(".toggle-btn")];

showHideButtonArray.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.closest(".toggle-btn").classList.toggle("hide");
  });
});