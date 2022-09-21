// Events on scroll
function scrollEvents() {
  const sections = document.querySelectorAll('.section');
  const links = document.querySelectorAll('.nav__link');
  const menu = document.querySelector('.nav__list');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          const linksHref = link
            .getAttribute('href')
            .replace('#', '');

          if (linksHref === entry.target.id) {
            link.classList.add('active')
          } else {
            link.classList.remove('active')
          }
        })
      }
    })
  },
    {
      threshold: 0.8,
    });

  sections.forEach((section) => {
    observer.observe(section);
  })

  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link')) {
      e.preventDefault()

      const sectionId = e.target
        .getAttribute('href')
        .replace('#', '');

      window.scrollTo({
        top: document.getElementById(sectionId).offsetTop,
        behavior: "smooth",
      })
    }
  })
};

scrollEvents();

// Animate Progress Bar
function animateProgressBar(params) {

  const progress = document.querySelector('.progress__bar');
  //Значение скролла от верха страницы
  const scrollValue = document.documentElement.scrollTop;

  //Высоту всего документа
  const documentHeight = document.documentElement.scrollHeight;

  //Высоту экрана пользователя
  const viewportHeight = document.documentElement.clientHeight;

  //Разницу между высотой сайта и высотой экрана пользователя
  const height = documentHeight - viewportHeight;

  //Процент прокрутки
  const scrollPercent = (scrollValue / height) * 100;

  //Стили прогресс бара
  progress.style.width = scrollPercent + '%';
};

window.addEventListener('scroll', animateProgressBar);