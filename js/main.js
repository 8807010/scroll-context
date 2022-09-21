// Events on scroll
function scrollEvents() {
  const sections = document.querySelectorAll('.section');
  const links = document.querySelectorAll('.nav__link');
  const menu = document.querySelectorAll('.nav__list');

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
      e.preventDefault();

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