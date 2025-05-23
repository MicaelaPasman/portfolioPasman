document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const links = menu.querySelectorAll('a');

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('show');
    document.body.style.overflow = menu.classList.contains('show') ? 'hidden' : 'auto';
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = 'auto';
    });
  });
});
