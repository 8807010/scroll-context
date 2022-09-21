"use strict";

// Events on scroll
function scrollEvents() {
  var sections = document.querySelectorAll('.section');
  var links = document.querySelectorAll('.nav__link');
  var menu = document.querySelectorAll('.nav__list');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        links.forEach(function (link) {
          var linksHref = link.getAttribute('href').replace('#', '');

          if (linksHref === entry.target.id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    threshold: 0.8
  });
  sections.forEach(function (section) {
    observer.observe(section);
  });
  menu.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav__link')) {
      e.preventDefault();
      var sectionId = e.target.getAttribute('href').replace('#', '');
      window.scrollTo({
        top: document.getElementById(sectionId).offsetTop,
        behavior: "smooth"
      });
    }
  });
}

;
scrollEvents();