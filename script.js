/* =========================================
   WASIT MANAT — PORTFOLIO SCRIPTS
   ========================================= */

/* ---- THEME TOGGLE ---- */
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);
updateGitHubImages(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
  updateGitHubImages(next);
});

function updateThemeIcon(theme) {
  themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function updateGitHubImages(theme) {
  const lightEls = document.querySelectorAll('#ghStatsLight, #ghLangsLight, #ghStreakLight');
  const darkEls  = document.querySelectorAll('#ghStatsDark,  #ghLangsDark,  #ghStreakDark');
  lightEls.forEach(el => el.style.display = theme === 'dark' ? 'none' : 'block');
  darkEls.forEach(el  => el.style.display = theme === 'dark' ? 'block' : 'none');
}


/* ---- NAVBAR SCROLL ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  updateActiveNavLink();
});


/* ---- ACTIVE NAV LINK ---- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
  const scrollY = window.scrollY + 120;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const id = sec.getAttribute('id');
    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    }
  });
}


/* ---- MOBILE MENU ---- */
const menuToggle = document.getElementById('menuToggle');
const navLinksEl = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
  const isOpen = navLinksEl.classList.contains('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinksEl.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    document.body.style.overflow = '';
  });
});


/* ---- TYPING ANIMATION ---- */
const phrases = [
  'CSE Student',
  'Web Developer',
  'C/C++ Programmer',
  'Photographer',
  'Donor Relations Officer',
  'CP Enthusiast',
  'Event Organizer',
];
let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typedEl = document.getElementById('typedText');

function typeLoop() {
  const phrase = phrases[phraseIdx];
  if (isDeleting) {
    typedEl.textContent = phrase.substring(0, charIdx--);
    if (charIdx < 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(typeLoop, 400);
      return;
    }
    setTimeout(typeLoop, 60);
  } else {
    typedEl.textContent = phrase.substring(0, charIdx++);
    if (charIdx > phrase.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
    setTimeout(typeLoop, 90);
  }
}
typeLoop();


/* ---- SCROLL FADE IN ---- */
const fadeEls = document.querySelectorAll('.fade-in');
const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger delay for children in a grid
      const siblings = Array.from(entry.target.parentElement?.children || []);
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${Math.min(idx * 80, 400)}ms`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeEls.forEach(el => observer.observe(el));


/* ---- SKILL BAR ANIMATION ---- */
const skillBarObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        const w = bar.getAttribute('data-width');
        bar.style.width = w + '%';
      });
      skillBarObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(el => skillBarObserver.observe(el));


/* ---- PROJECT FILTER ---- */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const cat = card.getAttribute('data-category');
      const show = filter === 'all' || cat === filter;
      card.style.opacity = show ? '1' : '0.15';
      card.style.transform = show ? '' : 'scale(0.97)';
      card.style.pointerEvents = show ? '' : 'none';
    });
  });
});


/* ---- CONTACT FORM ---- */
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const success = document.getElementById('formSuccess');

  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate send (replace with your backend or Formspree endpoint)
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
    success.classList.add('show');
    e.target.reset();

    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      btn.disabled = false;
      success.classList.remove('show');
    }, 5000);
  }, 1200);
}


/* ---- FOOTER YEAR ---- */
document.getElementById('year').textContent = new Date().getFullYear();


/* ---- SMOOTH SCROLL POLYFILL (for older browsers) ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
