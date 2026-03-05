// Small smooth scroll + active link highlight

const navLinks = document.querySelectorAll('nav ul li a');

// Highlight active link when scrolling
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 80;

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Add small scroll animation
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.hash).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
