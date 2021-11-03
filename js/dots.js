/* dots in the address */
const confirmAccordionAddress = document.querySelectorAll(
  ".confirm-accordion__label_address"
);
const accordionHistoryAddress = document.querySelectorAll(
  ".accordion-history-header__value_address"
);
const accordionHistorTableyAddress = document.querySelectorAll(
  ".accordion-history-table__label"
);

const hideAddress = (addressList) => {
  addressList.forEach((el) => {
    let str = el.innerHTML.split(" ").join("");
    el.innerHTML =
      str.substr(1, 4) +
      `<span>&bull;&bull;&bull;&bull;</span>` +
      str.substr(str.length - 5);
  });
};

hideAddress(accordionHistoryAddress);
hideAddress(confirmAccordionAddress);
hideAddress(accordionHistorTableyAddress);

