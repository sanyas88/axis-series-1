# AXIS · Series 1 — 3D landing stranica

> **Atribucija 3D modela (obavezno):**
> "Smartwatch" (https://skfb.ly/oWWMz) by Hasnain is licensed under
> Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

Portfolio projekat: 3D product-landing stranica za izmišljeni brend pametnog sata
**AXIS · Series 1**. Cilj je premium prezentacija proizvoda uz pravi 3D model
(rotacija mišem/dodirom preko Google `<model-viewer>`), bez frejmvorka i bez build koraka.

## Tehnologije
- Čist HTML5, CSS3, vanilla JavaScript (bez build koraka)
- [`<model-viewer>`](https://modelviewer.dev/) za 3D prikaz (učitan preko CDN-a)
- Google Fonts: Space Grotesk (naslovi) + Inter (telo teksta)

## Struktura
```
index.html          # markup svih sekcija
style.css           # dizajn tokeni + stilovi
script.js           # header, scroll-reveal, kontrola 3D modela
models/
  smartwatch.glb    # 3D model (CC Attribution — vidi gore)
files/              # izvorni plan i copy (axis-plan.md, axis-copy.md)
```

## Lokalno pokretanje
Statična stranica — treba je servirati preko lokalnog servera (zbog učitavanja `.glb`):

```bash
npx http-server -p 8123 -c-1 .
```

Zatim otvori `http://127.0.0.1:8123/`.

## Status
U izradi (sekcija po sekcija): Hero i Highlights završeni.

## Licenca
Kod je slobodan za korišćenje u edukativne/portfolio svrhe. 3D model podleže
CC Attribution licenci navedenoj na vrhu ovog fajla.
