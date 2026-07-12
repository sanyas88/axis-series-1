// AXIS · Series 1 — i18n (sr / en)

const LANG_KEY = "axis-lang";

const I18N = {
  sr: {
    "meta.title": "AXIS · Series 1 — Every heartbeat, quietly counted.",
    "meta.description":
      "AXIS Series 1 — minimalistički pametni sat. Jedan ekran, pet senzora, šest dana baterije. Meri ono što je bitno.",
    "meta.ogDescription":
      "Minimalistički pametni sat sa pravim 3D prikazom. Šest dana baterije, precizni senzori, 5 ATM vodootpornost.",
    "meta.twitterDescription":
      "Minimalistički pametni sat sa pravim 3D prikazom. Founders Edition — 189€.",

    "nav.home": "AXIS početna",
    "nav.label": "Glavna navigacija",
    "nav.specs": "Specifikacije",
    "nav.eng": "Engineering",
    "nav.config": "Konfigurator",
    "nav.sustain": "Održivost",
    "nav.pricing": "Cenovnik",
    "nav.contact": "Kontakt",
    "nav.cta": "Predporuči",
    "nav.menu.open": "Otvori meni",
    "nav.menu.close": "Zatvori meni",
    "lang.label": "Izbor jezika",

    "hero.eyebrow": "AXIS · Series 1 · 2026",
    "hero.title":
      'Every heartbeat,<br /><span class="hero-title-accent">quietly counted.</span>',
    "hero.modelAlt": "AXIS Series 1 pametni sat — 3D model, rotacija mišem ili dodirom",
    "hero.loading": "Učitavanje 3D modela…",
    "hero.drag": "Prevuci za rotaciju",
    "hero.desc":
      "Jedan ekran. Pet senzora. Nula nepotrebnog. AXIS meri ono što je bitno i ostavlja te na miru sa svim ostalim.",
    "hero.cta1": "Predporuči — Founders Edition",
    "hero.cta2": "Pogledaj specifikacije",
    "hero.scroll": "Skroluj dalje",

    "highlights.eyebrow": "Suština",
    "highlights.title": "Tri stvari, urađene kako treba.",
    "highlights.battery.unit": "dana",
    "highlights.battery.title": "Šest dana bez punjača",
    "highlights.battery.desc":
      "Tipična upotreba na jednom punjenju. Trideset šest sati čak i sa aktivnim GPS-om.",
    "highlights.sensors.unit": "senzora",
    "highlights.sensors.title": "Precizni senzori",
    "highlights.sensors.desc":
      "Puls, kiseonik u krvi, akcelerometar, žiroskop i ambijentalno svetlo — samo ono što zaista koristiš.",
    "highlights.water.title": "5 ATM vodootpornost",
    "highlights.water.desc":
      "Plivanje slobodno, tuširanje se podrazumeva. Samo ronjenje ostaje van dometa.",

    "specs.eyebrow": "Specifikacije",
    "specs.title": "Brojevi, ne obećanja.",
    "specs.battery.label": "Baterija",
    "specs.battery.unit": "dana",
    "specs.battery.note": "36 sati uz aktivan GPS",
    "specs.screen.label": "Ekran",
    "specs.screen.note": "Always-on opcija",
    "specs.sensors.label": "Senzori",
    "specs.sensors.unit": "senzora",
    "specs.sensors.s1": "Puls",
    "specs.sensors.s2": "Kiseonik u krvi (SpO₂)",
    "specs.sensors.s3": "Akcelerometar",
    "specs.sensors.s4": "Žiroskop",
    "specs.sensors.s5": "Ambijentalno svetlo",
    "specs.water.term": "Vodootpornost",
    "specs.material.term": "Materijal kućišta",
    "specs.material.val": "Anodizovani aluminijum · Founders: titanijum",
    "specs.diameter.term": "Prečnik",
    "specs.weight.term": "Težina",
    "specs.weight.val": "38 g (bez trake)",
    "specs.charging.term": "Punjenje",
    "specs.charging.val": "Magnetno · 0–80% za 35 min",
    "specs.compat.term": "Kompatibilnost",

    "eng.eyebrow": "Engineering",
    "eng.title": "Manje delova. Manje razloga da nešto pukne.",
    "eng.p1":
      "Svaki senzor u AXIS-u je tu jer smo ga koristili — ne jer je stao na listu specifikacija. Softver je pisan da traje, ne da impresionira na prvi utisak.",
    "eng.p2":
      "Testiran 6 meseci pre lansiranja na internom timu, ne na kupcima. Firmware ažuriranja dolaze mesečno, ne kad marketing to zahteva.",

    "config.eyebrow": "Konfigurator",
    "config.title": "Podesi svoj AXIS.",
    "config.modelAlt": "AXIS Series 1 — konfigurisani prikaz sata",
    "config.loading": "Učitavanje 3D modela…",
    "config.case.label": "Kućište",
    "config.case.grafit": "Grafit",
    "config.case.srebro": "Srebro",
    "config.case.titanijum": "Titanijum",
    "config.strap.label": "Traka",
    "config.strap.sport": "Sportska silikonska",
    "config.strap.kozna": "Kožna, tamnosmeđa",
    "config.strap.metal": "Metalna, milanska",
    "config.surcharge": "+ doplata",
    "config.combo.label": "Izabrana kombinacija",
    "config.price.label": "Founders cena",
    "config.cta": "Predporuči ovu kombinaciju",

    "sust.eyebrow": "Održivost",
    "sust.title": "Najodrživiji sat je onaj koji ne moraš da menjaš.",
    "sust.lead":
      "Trajnost je naša ekološka politika. Manje delova znači manje razloga da nešto pukne — a sat koji duže radi je sat koji ne završava u fioci ni na otpadu.",
    "sust.c1.k": "6 dana baterije",
    "sust.c1.v": "Ređe punjenje i manje ciklusa baterije tokom života uređaja.",
    "sust.c2.k": "Mesečni firmware",
    "sust.c2.v": "Softver produžava vek sata umesto da te gura na zamenu.",
    "sust.c3.k": "Manje delova",
    "sust.c3.v": "Manje tačaka kvara — jednostavnija konstrukcija koja duže traje.",

    "test.eyebrow": "Testimonijali",
    "test.title": "Šta kažu oni koji su ga nosili.",
    "test.q1":
      "AXIS ne pokušava da bude pametni telefon na ruci — i baš zato je bolji sat od većine konkurencije.",
    "test.a1.name": "M. Kovač",
    "test.a1.role": "Tehnički urednik, Circuit Weekly",
    "test.q2":
      "Šest dana baterije bez kompromisa na ekranu. Konačno neko ko je shvatio prioritete.",
    "test.a2.name": "L. Andersen",
    "test.a2.role": "Recenzent, Gearline",
    "test.q3": "Najtiši pametni sat koji sam nosio — u dobrom smislu.",
    "test.a3.name": "R. Petrović",
    "test.a3.role": "Wearable Digest",

    "cta.offer.eyebrow": "Founders Edition",
    "cta.offer.title": "Founders Edition — prvih 500 komada",
    "cta.offer.desc":
      "Predporudžbina otvara ograničen broj jedinica po lansirnoj ceni. Isporuka za 6 nedelja.",
    "cta.offer.old": "229€ posle lansiranja",
    "cta.offer.i1": "Sat",
    "cta.offer.i2": "Magnetni punjač",
    "cta.offer.i3": "Sportska traka",
    "cta.offer.i4": "2 godine garancije",
    "cta.offer.btn": "Predporuči — Founders Edition",
    "cta.news.title": "Budi prvi kad AXIS krene u prodaju.",
    "cta.news.desc":
      "Jedan email mesečno. Nema spama, nema deljenja podataka trećim licima.",
    "cta.news.label": "Email adresa",
    "cta.news.placeholder": "tvoj@email.com",
    "cta.news.btn": "Prijavi se",
    "cta.news.success": "Hvala — javljamo se čim Founders Edition krene u prodaju.",

    "footer.copy": "© 2026 AXIS. Vežbeni projekat, nije stvaran proizvod.",
    "footer.attrib":
      '3D model: <a href="https://skfb.ly/oWWMz" rel="noopener noreferrer" target="_blank">"Smartwatch"</a> by Hasnain, licenciran pod <a href="http://creativecommons.org/licenses/by/4.0/" rel="noopener noreferrer" target="_blank">Creative Commons Attribution</a>.',
  },

  en: {
    "meta.title": "AXIS · Series 1 — Every heartbeat, quietly counted.",
    "meta.description":
      "AXIS Series 1 — minimalist smartwatch. One screen, five sensors, six days of battery. Measures what matters.",
    "meta.ogDescription":
      "Minimalist smartwatch with real 3D view. Six days of battery, precise sensors, 5 ATM water resistance.",
    "meta.twitterDescription":
      "Minimalist smartwatch with real 3D view. Founders Edition — €189.",

    "nav.home": "AXIS home",
    "nav.label": "Main navigation",
    "nav.specs": "Specifications",
    "nav.eng": "Engineering",
    "nav.config": "Configurator",
    "nav.sustain": "Sustainability",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.cta": "Pre-order",
    "nav.menu.open": "Open menu",
    "nav.menu.close": "Close menu",
    "lang.label": "Language selection",

    "hero.eyebrow": "AXIS · Series 1 · 2026",
    "hero.title":
      'Every heartbeat,<br /><span class="hero-title-accent">quietly counted.</span>',
    "hero.modelAlt": "AXIS Series 1 smartwatch — 3D model, rotate with mouse or touch",
    "hero.loading": "Loading 3D model…",
    "hero.drag": "Drag to rotate",
    "hero.desc":
      "One screen. Five sensors. Zero excess. AXIS measures what matters and leaves you in peace with everything else.",
    "hero.cta1": "Pre-order — Founders Edition",
    "hero.cta2": "View specifications",
    "hero.scroll": "Scroll down",

    "highlights.eyebrow": "Essence",
    "highlights.title": "Three things, done right.",
    "highlights.battery.unit": "days",
    "highlights.battery.title": "Six days without a charger",
    "highlights.battery.desc":
      "Typical use on a single charge. Thirty-six hours even with active GPS.",
    "highlights.sensors.unit": "sensors",
    "highlights.sensors.title": "Precise sensors",
    "highlights.sensors.desc":
      "Heart rate, blood oxygen, accelerometer, gyroscope and ambient light — only what you actually use.",
    "highlights.water.title": "5 ATM water resistance",
    "highlights.water.desc":
      "Swim freely, showering is a given. Only diving is out of scope.",

    "specs.eyebrow": "Specifications",
    "specs.title": "Numbers, not promises.",
    "specs.battery.label": "Battery",
    "specs.battery.unit": "days",
    "specs.battery.note": "36 hours with active GPS",
    "specs.screen.label": "Display",
    "specs.screen.note": "Always-on option",
    "specs.sensors.label": "Sensors",
    "specs.sensors.unit": "sensors",
    "specs.sensors.s1": "Heart rate",
    "specs.sensors.s2": "Blood oxygen (SpO₂)",
    "specs.sensors.s3": "Accelerometer",
    "specs.sensors.s4": "Gyroscope",
    "specs.sensors.s5": "Ambient light",
    "specs.water.term": "Water resistance",
    "specs.material.term": "Case material",
    "specs.material.val": "Anodized aluminum · Founders: titanium",
    "specs.diameter.term": "Diameter",
    "specs.weight.term": "Weight",
    "specs.weight.val": "38 g (without strap)",
    "specs.charging.term": "Charging",
    "specs.charging.val": "Magnetic · 0–80% in 35 min",
    "specs.compat.term": "Compatibility",

    "eng.eyebrow": "Engineering",
    "eng.title": "Fewer parts. Fewer reasons to break.",
    "eng.p1":
      "Every sensor in AXIS is there because we used it — not because it looked good on a spec sheet. Software is built to last, not to impress on first glance.",
    "eng.p2":
      "Tested for 6 months before launch on our internal team, not on customers. Firmware updates arrive monthly, not when marketing demands them.",

    "config.eyebrow": "Configurator",
    "config.title": "Configure your AXIS.",
    "config.modelAlt": "AXIS Series 1 — configured watch view",
    "config.loading": "Loading 3D model…",
    "config.case.label": "Case",
    "config.case.grafit": "Graphite",
    "config.case.srebro": "Silver",
    "config.case.titanijum": "Titanium",
    "config.strap.label": "Strap",
    "config.strap.sport": "Sport silicone",
    "config.strap.kozna": "Leather, dark brown",
    "config.strap.metal": "Metal, Milanese",
    "config.surcharge": "+ surcharge",
    "config.combo.label": "Selected combination",
    "config.price.label": "Founders price",
    "config.cta": "Pre-order this combination",

    "sust.eyebrow": "Sustainability",
    "sust.title": "The most sustainable watch is the one you don't have to replace.",
    "sust.lead":
      "Longevity is our environmental policy. Fewer parts means fewer things to break — and a watch that lasts longer is one that doesn't end up in a drawer or a landfill.",
    "sust.c1.k": "6-day battery",
    "sust.c1.v": "Less frequent charging and fewer battery cycles over the device's lifetime.",
    "sust.c2.k": "Monthly firmware",
    "sust.c2.v": "Software extends the watch's life instead of pushing you toward a replacement.",
    "sust.c3.k": "Fewer parts",
    "sust.c3.v": "Fewer failure points — simpler construction that lasts longer.",

    "test.eyebrow": "Testimonials",
    "test.title": "What those who wore it say.",
    "test.q1":
      "AXIS doesn't try to be a smartphone on your wrist — and that's exactly why it's a better watch than most of the competition.",
    "test.a1.name": "M. Kovač",
    "test.a1.role": "Technical editor, Circuit Weekly",
    "test.q2":
      "Six days of battery without compromising the display. Finally someone who understood the priorities.",
    "test.a2.name": "L. Andersen",
    "test.a2.role": "Reviewer, Gearline",
    "test.q3": "The quietest smartwatch I've worn — in the best sense.",
    "test.a3.name": "R. Petrović",
    "test.a3.role": "Wearable Digest",

    "cta.offer.eyebrow": "Founders Edition",
    "cta.offer.title": "Founders Edition — first 500 units",
    "cta.offer.desc":
      "Pre-order opens a limited number of units at launch price. Delivery in 6 weeks.",
    "cta.offer.old": "€229 after launch",
    "cta.offer.i1": "Watch",
    "cta.offer.i2": "Magnetic charger",
    "cta.offer.i3": "Sport strap",
    "cta.offer.i4": "2-year warranty",
    "cta.offer.btn": "Pre-order — Founders Edition",
    "cta.news.title": "Be first when AXIS goes on sale.",
    "cta.news.desc":
      "One email per month. No spam, no sharing data with third parties.",
    "cta.news.label": "Email address",
    "cta.news.placeholder": "you@email.com",
    "cta.news.btn": "Sign up",
    "cta.news.success": "Thanks — we'll reach out when Founders Edition goes on sale.",

    "footer.copy": "© 2026 AXIS. Practice project, not a real product.",
    "footer.attrib":
      '3D model: <a href="https://skfb.ly/oWWMz" rel="noopener noreferrer" target="_blank">"Smartwatch"</a> by Hasnain, licensed under <a href="http://creativecommons.org/licenses/by/4.0/" rel="noopener noreferrer" target="_blank">Creative Commons Attribution</a>.',
  },
};

function getLang() {
  const stored = localStorage.getItem(LANG_KEY);
  if (stored === "en" || stored === "sr") return stored;
  return "sr";
}

function t(key, lang = getLang()) {
  return I18N[lang][key] ?? I18N.sr[key] ?? key;
}

function applyI18n(lang) {
  const dict = I18N[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const [attr, key] = el.dataset.i18nAttr.split(":");
    if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
  });
}

function updateMeta(lang) {
  document.title = t("meta.title", lang);
  const desc = document.getElementById("metaDesc");
  const ogDesc = document.getElementById("metaOgDesc");
  const twDesc = document.getElementById("metaTwDesc");
  const ogLocale = document.getElementById("metaOgLocale");
  if (desc) desc.setAttribute("content", t("meta.description", lang));
  if (ogDesc) ogDesc.setAttribute("content", t("meta.ogDescription", lang));
  if (twDesc) twDesc.setAttribute("content", t("meta.twitterDescription", lang));
  if (ogLocale) ogLocale.setAttribute("content", lang === "en" ? "en_US" : "sr_RS");
}

function updateLangToggle(lang) {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  const navToggle = document.getElementById("navToggle");
  if (navToggle && navToggle.getAttribute("aria-expanded") === "true") {
    navToggle.setAttribute("aria-label", t("nav.menu.close", lang));
    const sr = navToggle.querySelector(".sr-only");
    if (sr) sr.textContent = t("nav.menu.close", lang);
  } else if (navToggle) {
    navToggle.setAttribute("aria-label", t("nav.menu.open", lang));
    const sr = navToggle.querySelector(".sr-only");
    if (sr) sr.textContent = t("nav.menu.open", lang);
  }
}

function setLang(lang) {
  if (lang !== "sr" && lang !== "en") return;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  applyI18n(lang);
  updateMeta(lang);
  updateLangToggle(lang);
  document.dispatchEvent(new CustomEvent("axis:langchange", { detail: { lang } }));
}

function initI18n() {
  const lang = getLang();
  document.documentElement.lang = lang;
  applyI18n(lang);
  updateMeta(lang);
  updateLangToggle(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
}

initI18n();
