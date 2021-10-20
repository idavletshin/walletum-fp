/* tabs */

function activeNavbarItem(navbarItem, num) {
  if (num === 1) {
    var contentBody = document.getElementsByClassName("content__body");

    for (var i = 0; i < contentBody.length; i++) {
      contentBody[i].classList.remove("active");
    }
  }

  if (num === 2) {
    var sendForm = document.getElementsByClassName("send-form");

    for (var j = 0; j < sendForm.length; j++) {
      sendForm[j].classList.remove("active");
    }
  }

  if (num === 3) {
    var transactionList = document.getElementsByClassName(
      "confirm-accordion__column"
    );

    for (var k = 0; k < transactionList.length; k++) {
      transactionList[k].classList.remove("active");
    }
  }

  if (num === 4) {
    var modalFormList = document.getElementsByClassName(
      "modal-form__wrapper"
    );

    for (var l = 0; l < modalFormList.length; l++) {
      modalFormList[l].classList.remove("active");
    }
  }

  document.getElementById(navbarItem).classList.add("active");
}