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

/* Count-up: veliki brojevi se "izbroje" pri ulasku u viewport */
const countEls = document.querySelectorAll(".hl-num, .spec-num");
if (!prefersReducedMotion && countEls.length) {
  const parsed = new Map();
  countEls.forEach((el) => {
    const m = el.textContent.trim().match(/^([0-9]+(?:\.[0-9]+)?)(.*)$/);
    if (!m) return;
    parsed.set(el, {
      target: parseFloat(m[1]),
      decimals: (m[1].split(".")[1] || "").length,
      suffix: m[2],
    });
    el.textContent = (0).toFixed(parsed.get(el).decimals) + m[2];
  });

  const runCount = (el) => {
    const { target, decimals, suffix } = parsed.get(el);
    const duration = 1100;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(decimals) + suffix;
    };
    requestAnimationFrame(step);
  };

  const countObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runCount(entry.target);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );
  countEls.forEach((el) => {
    if (parsed.has(el)) countObserver.observe(el);
  });
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
