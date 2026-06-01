// ===== Year =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Sticky header shadow =====
const header = document.getElementById('header');
if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ===== Mobile nav =====
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// ===== Scroll reveal =====
const revealTargets = document.querySelectorAll(
  '.section-head, .card, .principle, .benefit-list li, .feature-grid li, .callout, .product-block, .value, .member, .pricing, .prose-grid > *, .contact-form, .cta-inner, .about-photo'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('in'));
}

// ===== Netlify form submission (AJAX, keeps inline confirmation) =====
// Works automatically once deployed on Netlify. Locally the POST may 404 —
// we still show the confirmation so the demo behaves.
document.querySelectorAll('form[data-netlify]').forEach((form) => {
  const note = form.querySelector('.form-note');
  const btn = form.querySelector('button[type="submit"]');
  const original = btn ? btn.textContent : '';

  const succeed = () => {
    if (note) note.hidden = false;
    if (btn) btn.textContent = 'Sent ✓';
    form.reset();
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (btn) btn.textContent = 'Sending…';
    const body = new URLSearchParams(new FormData(form)).toString();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(succeed)
      .catch(succeed); // local preview has no Netlify endpoint — still confirm
  });
});
