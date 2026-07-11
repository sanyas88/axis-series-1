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

/* Suptilan parallax brojčanika u Engineering sekciji */
const engDial = document.querySelector(".eng-dial");
if (engDial && !prefersReducedMotion) {
  let ticking = false;
  const updateParallax = () => {
    const rect = engDial.getBoundingClientRect();
    const viewCenter = window.innerHeight / 2;
    const rel = (rect.top + rect.height / 2 - viewCenter) / window.innerHeight;
    engDial.style.transform = `translateY(${(rel * -26).toFixed(1)}px)`;
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true }
  );
  updateParallax();
}

/* Konfigurator: stvarni recolor materijala 3D modela */
const configModel = document.getElementById("configModel");
if (configModel) {
  const CASE = {
    grafit: { label: "Grafit", color: [0.1, 0.11, 0.13], metallic: 1, rough: 0.5, surcharge: false },
    srebro: { label: "Srebro", color: [0.82, 0.84, 0.87], metallic: 1, rough: 0.32, surcharge: false },
    titanijum: { label: "Titanijum", color: [0.55, 0.54, 0.51], metallic: 1, rough: 0.46, surcharge: true },
  };
  const STRAP = {
    sport: { label: "Sportska silikonska", color: [0.12, 0.13, 0.14], metallic: 0, rough: 0.9, surcharge: false },
    kozna: { label: "Kožna, tamnosmeđa", color: [0.3, 0.17, 0.09], metallic: 0, rough: 0.65, surcharge: true },
    metal: { label: "Metalna, milanska", color: [0.78, 0.79, 0.82], metallic: 1, rough: 0.28, surcharge: true },
  };

  const combo = document.getElementById("configCombo");
  const price = document.getElementById("configPrice");
  const selected = { case: "grafit", strap: "sport" };
  let modelReady = false;

  const paint = (names, opt) => {
    names.forEach((n) => {
      const mat = configModel.model && configModel.model.materials.find((x) => x.name === n);
      if (!mat) return;
      mat.pbrMetallicRoughness.setBaseColorFactor([...opt.color, 1]);
      mat.pbrMetallicRoughness.setMetallicFactor(opt.metallic);
      mat.pbrMetallicRoughness.setRoughnessFactor(opt.rough);
    });
  };

  const applyMaterials = () => {
    if (!modelReady) return;
    paint(["Body", "Crown"], CASE[selected.case]);
    paint(["Strap1", "Strap2"], STRAP[selected.strap]);
  };

  const updateSummary = () => {
    combo.textContent = `${CASE[selected.case].label} · ${STRAP[selected.strap].label}`;
    const hasSurcharge = CASE[selected.case].surcharge || STRAP[selected.strap].surcharge;
    price.innerHTML = hasSurcharge
      ? '189€<span class="config-price-note">+ doplata</span>'
      : "189€";
  };

  document.querySelectorAll(".config-options").forEach((groupEl) => {
    const group = groupEl.dataset.group;
    groupEl.querySelectorAll(".config-swatch").forEach((btn) => {
      btn.addEventListener("click", () => {
        selected[group] = btn.dataset.key;
        groupEl.querySelectorAll(".config-swatch").forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-pressed", String(active));
        });
        applyMaterials();
        updateSummary();
      });
    });
  });

  configModel.addEventListener("load", () => {
    modelReady = true;
    applyMaterials();
  });
  updateSummary();
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
