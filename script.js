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
  'PHP & Laravel + Django',
  'AI-Integrated Web Development',
  'REST APIs & Databases',
  'Python Automation',
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

// ── Animated counters ──
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10) || 0;
      const suffix = el.dataset.suffix || '';
      const duration = 1200;
      const start = performance.now();
      (function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(start);
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.4 }
);
document.querySelectorAll('[data-count]').forEach((el) => counterObserver.observe(el));

// ── Project filters ──
const filters = document.getElementById('filters');
const projects = Array.from(document.querySelectorAll('#projectsGrid .project'));

if (filters) {
  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if (!btn) return;
    filters.querySelectorAll('.filter').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const want = btn.dataset.filter;
    projects.forEach((p) => {
      const show = want === 'all' || p.dataset.cat === want;
      p.classList.toggle('hide', !show);
      p.classList.remove('pop');
      if (show) {
        // restart the pop animation
        void p.offsetWidth;
        p.classList.add('pop');
      }
    });
  });
}

// ── Reviews carousel ──
const track = document.getElementById('reviewTrack');
const prevBtn = document.getElementById('revPrev');
const nextBtn = document.getElementById('revNext');
const dotsWrap = document.getElementById('revDots');

if (track && prevBtn && nextBtn && dotsWrap) {
  const cards = Array.from(track.children);

  cards.forEach((_, i) => {
    const dot = document.createElement('i');
    dot.addEventListener('click', () => scrollToCard(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function scrollToCard(i) {
    track.scrollTo({ left: cards[i].offsetLeft - track.offsetLeft, behavior: 'smooth' });
  }

  function nearestIndex() {
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - track.offsetLeft - track.scrollLeft);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    return best;
  }

  function sync() {
    const idx = nearestIndex();
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    prevBtn.disabled = track.scrollLeft <= 2;
    nextBtn.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
  }

  function step(dir) {
    const idx = nearestIndex();
    scrollToCard(Math.max(0, Math.min(cards.length - 1, idx + dir)));
  }

  prevBtn.addEventListener('click', () => step(-1));
  nextBtn.addEventListener('click', () => step(1));
  track.addEventListener('scroll', () => window.requestAnimationFrame(sync));
  window.addEventListener('resize', sync);
  sync();

  // gentle autoplay, paused on hover / user interaction
  let paused = false;
  track.addEventListener('pointerenter', () => (paused = true));
  track.addEventListener('pointerleave', () => (paused = false));
  track.addEventListener('touchstart', () => (paused = true), { passive: true });

  setInterval(() => {
    if (paused) return;
    const next = nearestIndex() + 1;
    if (next >= cards.length) scrollToCard(0);
    else scrollToCard(next);
  }, 5000);
}

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
