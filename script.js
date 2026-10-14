// ── Nav: scroll state + mobile toggle ──
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Typing effect in hero ──
const roles = [
  'React.js & Node.js',
  'PHP & Laravel',
  'AI-Integrated Web Development',
  'REST APIs & Databases',
];
const typedEl = document.getElementById('typed');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const current = roles[roleIndex];
  typedEl.textContent = current.slice(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 65);
  } else if (!deleting && charIndex === current.length) {
    deleting = true;
    setTimeout(type, 1600);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 30);
  } else {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 300);
  }
}
type();

// ── Reveal on scroll ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`;
  observer.observe(el);
});

// ── Contact form (front-end only demo) ──
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  note.textContent = `Thanks ${name || 'there'}! This demo form doesn't send yet — please email abeerhuzaifa5@gmail.com directly.`;
  form.reset();
});

// ── Footer year ──
document.getElementById('year').textContent = new Date().getFullYear();
