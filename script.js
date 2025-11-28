// Set footer year automatically
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Add .reveal to elements and observe them
document.querySelectorAll(
  ".hero-content, .section, .card, .skill-group"
).forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
