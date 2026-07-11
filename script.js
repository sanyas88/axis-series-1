// AXIS · Series 1 — script.js

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Sticky header: dobija pozadinu tek nakon skrola */
const header = document.getElementById("siteHeader");
const onScroll = () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* Scroll-reveal (ponovo se koristi za sve sekcije) */
const revealEls = document.querySelectorAll("[data-reveal]");
if (prefersReducedMotion) {
  revealEls.forEach((el) => el.classList.add("is-in"));
} else {
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        // Blagi stagger unutar iste sekcije
        setTimeout(() => entry.target.classList.add("is-in"), i * 90);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
}

/* Hero model: ugasi auto-rotate čim korisnik krene da rotira */
const heroModel = document.querySelector(".hero-model");
if (heroModel) {
  if (prefersReducedMotion) heroModel.removeAttribute("auto-rotate");

  const stopAutoRotate = () => {
    heroModel.removeAttribute("auto-rotate");
    const hint = document.querySelector(".hero-drag-hint");
    if (hint) hint.style.opacity = "0";
  };
  heroModel.addEventListener("pointerdown", stopAutoRotate, { once: true });
}
