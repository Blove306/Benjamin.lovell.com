const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header .nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Paste a YouTube/Vimeo/showreel URL here when ready.
const SHOWREEL_URL = '';
const showreelButton = document.querySelector('[data-showreel]');
if (showreelButton) showreelButton.addEventListener('click', () => {
  if (SHOWREEL_URL) window.open(SHOWREEL_URL, '_blank', 'noopener');
  else alert('Add your showreel URL to SHOWREEL_URL in script.js.');
});
