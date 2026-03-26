/**
 * UI 交互模块
 * - Scroll Reveal
 * - Lightbox
 * - Mobile Menu
 * - Gallery click
 */

// ── Scroll Reveal ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal, .checkpoint-card, .timeline-item, .gallery-item')
  .forEach(el => revealObserver.observe(el));

// ── Lightbox ──────────────────────────────────────────────────
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

export function openLightbox(el) {
  lightboxImg.src = el.querySelector('img').src;
  lightbox.classList.add('active');
}
export function closeLightbox() {
  lightbox.classList.remove('active');
}
lightbox.addEventListener('click', closeLightbox);

// ── Mobile Menu ───────────────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.getElementById('navLinks');

export function toggleMenu() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
}
export function closeMenu() {
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');
}

// ── Gallery item click → lightbox ─────────────────────────────
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => openLightbox(item));
});

// ── Loader hide ───────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 800);
});
