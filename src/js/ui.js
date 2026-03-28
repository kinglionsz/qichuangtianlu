/**
 * UI 交互模块
 * - Scroll Reveal
 * - Lightbox
 * - Mobile Menu
 * - Gallery click
 * - Event Listeners (init/destroy)
 */

import { togglePlay, cycleSpeed, resetAnim } from './trajectory.js';

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
  // 错误边界：检查元素是否存在
  if (!el) {
    console.warn('[UI] Lightbox: No element provided');
    return;
  }
  const img = el.querySelector('img');
  if (!img) {
    console.warn('[UI] Lightbox: No image found in element');
    return;
  }
  lightboxImg.src = img.src;
  lightbox.classList.add('active');
}
export function closeLightbox() {
  lightbox.classList.remove('active');
}
lightbox.addEventListener('click', closeLightbox);

// ESC 键关闭 Lightbox
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});

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

// ── 事件绑定初始化 ─────────────────────────────────────────────
export function initEventListeners() {
  // 汉堡菜单
  const hamburgerEl = document.getElementById('hamburger');
  if (hamburgerEl) {
    hamburgerEl.addEventListener('click', toggleMenu);
  }

  // 导航链接
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // 轨迹控制按钮
  const btnPlay = document.getElementById('btn-play');
  const btnSpeed = document.getElementById('btn-speed');
  const btnReset = document.getElementById('btn-reset');

  if (btnPlay) btnPlay.addEventListener('click', togglePlay);
  if (btnSpeed) btnSpeed.addEventListener('click', cycleSpeed);
  if (btnReset) btnReset.addEventListener('click', resetAnim);

  console.log('[UI] Event listeners initialized');
}

// ── 事件解绑清理 ─────────────────────────────────────────────
export function destroyEventListeners() {
  const hamburgerEl = document.getElementById('hamburger');
  if (hamburgerEl) {
    hamburgerEl.removeEventListener('click', toggleMenu);
  }

  document.querySelectorAll('[data-nav]').forEach(link => {
    link.removeEventListener('click', closeMenu);
  });

  const btnPlay = document.getElementById('btn-play');
  const btnSpeed = document.getElementById('btn-speed');
  const btnReset = document.getElementById('btn-reset');

  if (btnPlay) btnPlay.removeEventListener('click', togglePlay);
  if (btnSpeed) btnSpeed.removeEventListener('click', cycleSpeed);
  if (btnReset) btnReset.removeEventListener('click', resetAnim);

  console.log('[UI] Event listeners destroyed');
}
