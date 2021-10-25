/* navbar */

const nav = function () {
  let navbar = document.querySelectorAll('.navbar-item'), // Выбираем элементы навигации навбаров
    navbarContent = document.querySelectorAll('.navbar-content'), // Выбираем сам контент навигационной панели
    navbarName; // Переменная для имени таба
  let numGroup

  // Проходим циклом по каждому элементу навигации и навешиваем обработчик клика, который вызывает функцию selectNav
  navbar.forEach((item) => {
    item.addEventListener('click', selectNav)
  });

  function selectNav() {

    numGroup = this.getAttribute('data-num')

    navbar.forEach((item) => {
      // Удаляем активный класс у всех элементов навигации navbar
      if (item.getAttribute('data-num') === numGroup) {
        item.classList.remove('active');
      }
    });

    this.classList.add('active');  // Добавляем активный укласс у элемента по которому кликнули
    navbarName = this.getAttribute('data-id'); // Получаем имя navbar, который нам нужен
    selectNavbarContent(navbarName, numGroup); // Запускаем функцию, чтобы показать выбранный navbar
  }

  function selectNavbarContent(nav, num) {
    // Проходим по всем navbar и проверяем есть ли у элемента id, равный имени navbarName. Если есть, то добавляем класс активного navbar, если нет, то удаляем этот класс
    navbarContent.forEach((item) => {
      if (item.getAttribute('data-num') === num) {
        item.classList.remove('active');
      }
      if (nav === item.id) {
        item.classList.add('active')
      }
    });
  }
};

nav();

/*  tabs */

const tab = function () {
  let tabNav = document.querySelectorAll('.tabs-nav__item'), // Выбираем элементы навигации табов
    tabContent = document.querySelectorAll('.tabs-content__item'), // Выбираем сами табы
    tabName; // Переменная для имени таба

  // Проходим циклом по каждому элементу навигации и навешиваем обработчик клика, который вызывает функцию selectTabNav
  tabNav.forEach((item) => {
    item.addEventListener('click', selectTabNav)
  });

  function selectTabNav() {
    tabNav.forEach((item) => {
      // Удаляем активный класс у всех элементов навигации табов
      item.classList.remove('active');
    });
    this.classList.add('active');  // Добавляем активный укласс у элемента по которому кликнули
    tabName = this.getAttribute('data-id'); // Получаем имя таба, который нам нужен
    selectTabContent(tabName); // Запускаем функцию, чтобы показать выбранный таб
  }

  function selectTabContent(tab) {
    // Проходим по всем табам и проверяем есть ли у элемента id, равный имени таба(переменной tabName). Если есть, то добавляем класс активного таба, если нет, то удаляем этот класс
    tabContent.forEach((item) => {

      if (tab === item.id) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    });
  }
};

tab();