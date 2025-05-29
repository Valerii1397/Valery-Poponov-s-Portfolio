// Находим кнопку переключения темы по id
const toggleButton = document.getElementById("themeToggleImg");

// Получаем элемент <body>
const body = document.body;

// Получаем элемент логотипа по id="logo"
const logo = document.getElementById("logo");

// Добавляем обработчик клика по кнопке
toggleButton.addEventListener("click", () => {
  // Переключаем классы темы на body
  body.classList.toggle("dark_thema");
  body.classList.toggle("light_thema");

  // Меняем картинку логотипа в зависимости от темы
  if (body.classList.contains("light_thema")) {
    logo.src = "img/logo_light.png"; // Логотип для светлой темы (темный логотип)
   themeToggle_Img.src = "img/lamp_light.png";
   phone_header.src="img/phone_icon_light.png"
  } else {
    logo.src = "img/Vp_Code.png"; // Логотип для темной темы (светлый логотип)
    themeToggle_Img.src = "img/Lamp.png";
    phone_header.src="img/svg_phone.svg"
  }
});

function toggleMenu() {
    document.querySelector('.nav').classList.toggle('active');
  }


const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  function toggleMenu() {
    nav.classList.toggle('active');
  }

  // Закрытие при клике вне меню
  document.addEventListener('click', function (event) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnBurger = burger.contains(event.target);

    if (!isClickInsideNav && !isClickOnBurger) {
      nav.classList.remove('active');
    }
  });

 