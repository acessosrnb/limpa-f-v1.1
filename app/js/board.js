/**
 * board.js — Workflow Board Interactions
 * Sanama — GS Inima · WF-PROC-001
 */

/* ── Detail panel toggle ── */
function toggleDetail(btn) {
  const body = btn.nextElementSibling;
  const inner = body.querySelector('.detail-inner');
  btn.classList.toggle('open');
  body.style.maxHeight = btn.classList.contains('open')
    ? inner.scrollHeight + 20 + 'px'
    : '0';
}

/* ── Nav active state on scroll ── */
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.board-section[id]');
  const navLinks = document.querySelectorAll('.nav-inner a');
  if (!sections.length || !navLinks.length) return;

  const update = () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 60) current = s.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
});
