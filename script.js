

// Smooth scroll to section on nav link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
          e.preventDefault();
          const section = document.querySelector(href);
          section?.scrollIntoView({ behavior: 'smooth' });
      }
  });
});

// Highlight nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
      }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
      }
  });
});
