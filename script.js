// ===== NAV SCROLL =====
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

// ===== PARALLAX =====
document.addEventListener('DOMContentLoaded', () => {
  const parallaxEls = document.querySelectorAll('.hero-bg');
  window.addEventListener('scroll', () => {
    parallaxEls.forEach(el => {
      const parent = el.parentElement;
      const rect = parent.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${center * 0.25}px)`;
    });
  }, { passive: true });
});

// ===== SCROLL REVEAL =====
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));
});

// ===== TAGLINE ROTATOR =====
document.addEventListener('DOMContentLoaded', () => {
  const rotator = document.querySelector('.tagline-rotator');
  if (!rotator) return;

  const taglines = [
    "Oregon Real Estate, Owned",
    "From Dirt to Done",
    "Risk Assessed. Ideas Realized.",
    "Development Management & Advisory",
    "Licensed. Approved. Proven.",
    "Salem, Oregon",
    "Every Project Starts with a Question Mark",
  ];

  let index = 0;
  setInterval(() => {
    rotator.style.opacity = '0';
    setTimeout(() => {
      index = (index + 1) % taglines.length;
      rotator.textContent = taglines[index];
      rotator.style.opacity = '1';
    }, 300);
  }, 3200);
});
