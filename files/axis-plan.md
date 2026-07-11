# PLAN.MD — AXIS · Series 1: 3D landing stranica za pametni sat

Ti si senior front-end developer sa iskustvom u 3D web prezentacijama proizvoda.

**Tech stack:** čist HTML5, CSS3, vanilla JavaScript. Za 3D prikaz koristi Google-ov
`<model-viewer>` web komponent (učitan preko CDN-a: `https://unpkg.com/@google/model-viewer/dist/model-viewer-umd.js`,
sa `type="module"`). Fajlovi: `index.html`, `style.css`, `script.js`, `models/smartwatch.glb`.

Ovo NIJE Next.js/React/Framer Motion projekat — namerno je jednostavniji od inspiracije
(Obsidian Moto sajt) koja koristi frame-sekvence i skrol-video. Umesto toga, `model-viewer`
daje pravu 3D rotaciju (mišem/dodirom) bez potrebe za stotinama slika ili video fajlovima.

Sav tekst, komentari u kodu i commit poruke — na srpskom jeziku.

---

## SIMULIRANI BRIEF

> Pravim portfolio projekat — izmišljen brend pametnog sata "AXIS · Series 1". Cilj je da
> pokažem da umem da napravim 3D product-page, ne pravi biznis. Inspiracija je jedan
> "cinematic" sajt za motocikl (Next.js, video-skrolovanje) ali ja hoću lakšu, tehnički
> jednostavniju verziju sa pravim 3D modelom umesto video trika — brže se učitava i
> tehnički je "poštenije" (pravi 3D, ne fotografska simulacija).

**Tehnički zahtevi izvučeni iz ovoga:**
- Statična stranica, bez build koraka, bez frejmvorka
- 3D model mora biti lagan (koristimo GLB sa 1k teksturom, ~7MB — ne 2k/14MB verziju)
- Rotacija je mišem/dodirom na `model-viewer`, NE skrol-kontrolisana animacija
- Mora raditi na mobilnom (touch rotacija je ugrađena u `model-viewer`, proveriti da radi)

---

## OBAVEZNA ATRIBUCIJA (pravni zahtev, ne stilska odluka)

3D model je tuđi rad pod CC Attribution licencom. Ovo MORA biti vidljivo na sajtu,
ne samo u `README.md`:

```
"Smartwatch" (https://skfb.ly/oWWMz) by Hasnain is licensed under
Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
```

Stavi ovo u footer, kao mali tekst — vidljivo, ali ne nametljivo. Ne brisati, ne
parafrazirati, ne skraćivati link.

---

## APLIKACIJA

**Ime:** AXIS · Series 1
**Slogan:** Every heartbeat, quietly counted.

**Sekcije:**
1. Header — logo, navigacija, sticky
2. Hero — naslov, opis, `model-viewer` sa 3D satom, dugmad (CTA)
3. Highlights — tri kartice sa ključnim prednostima:
   - **6 dana baterije** — dugotrajna baterija
   - **Precizni senzori** — tačna merenja
   - **5 ATM vodootpornost** — otpornost na vodu
4. Specifikacije — baterija, ekran, senzori, vodootpornost, materijal (tabela/grid)
5. Engineering — kratka priča o filozofiji dizajna (tekst, bez slika)
6. Konfigurator — izbor boje kućišta i trake (menja naziv izabrane kombinacije i,
   ako `model-viewer` podržava `<model-viewer variant-name>` za taj model, menja i
   boju samog 3D modela; ako model nema definisane varijante, konfigurator menja samo
   tekst/cenu, ne pretvaraj se da menja 3D izgled ako stvarno ne menja)
7. Testimonijali — 3 izmišljena citata, izmišljeni mediji (NIKAD prava imena medija)
8. Cenovnik/Predporudžbina — Founders Edition, cena, šta je uključeno
9. Kontakt/Newsletter — email forma
10. Footer — copyright + OBAVEZNA atribucija 3D modela (gore)

Sadržaj (copy) je već napisan — koristi `copy.md` kao izvor teksta, ne izmišljaj nove
specifikacije ili cene.

---

## DIZAJN

**Paleta boja:**
```
--bg: #15171A          (grafitno siva pozadina)
--surface: #1D2024      (kartice)
--text: #EDEFF2         (skoro belo)
--text-muted: #9BA1A8
--accent: #4FD1E8       (hladna cijan/elektrik plava)
```

**Tipografija:** biraj sam(a) jedan geometrijski/tehnički sans-serif font sa Google Fonts
(npr. Space Grotesk ili Sora za naslove, Inter za telo teksta) — ton je hladan, precizan,
ne "luksuzan" kao Protokol ili Obsidian Moto.

**Namerna razlika od prethodna dva projekta u portfoliju:** ovaj sajt ne sme vizuelno
da liči ni na Protokol (topla narandžasta/gvozdeno-zelena) ni na Obsidian Moto
(crna/plava, cinematic). Cijan akcenat na grafitnoj pozadini je nova, treća paleta.

---

## `<model-viewer>` — TEHNIČKE NAPOMENE

- Učitaj skriptu u `<head>`: `<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer-umd.js"></script>`
- Osnovni tag: `<model-viewer src="models/smartwatch.glb" camera-controls auto-rotate alt="AXIS Series 1 pametni sat"></model-viewer>`
- `camera-controls` omogućava korisniku da rotira mišem/dodirom
- `auto-rotate` sporo rotira sat kad korisnik ne interaguje — ugasi ga posle par sekundi
  interakcije korisnika (event `camera-change`) da ne smeta
- Postavi `poster` atribut (statična slika) da nešto bude vidljivo dok se `.glb` fajl
  učitava — bez toga korisnik gleda prazan pravougaonik par sekundi
- Testiraj obavezno na mobilnom — touch rotacija ume da se "otme" od vertikalnog skrola
  stranice ako `model-viewer` nije pravilno omeđen (proveri `touch-action` ponašanje)

---

## PLAN MORA DA UKLJUČI

**HTML:**
- Semantička struktura, `<model-viewer>` unutar hero `<section>`
- Meta tagovi (viewport, description, Open Graph — isto kao Protokol)

**CSS:**
- CSS varijable za paletu (gore)
- Mobile-first, `model-viewer` mora imati definisanu visinu (ne "auto") da ne skače
  layout dok se model učitava

**JavaScript:**
- Konfigurator: menja tekst izabrane varijante, cenu, i boju/varijantu 3D modela AKO
  model to podržava (proveriti prvo da li GLB ima definisane `variants`, ne pretpostavljati)
- Newsletter forma: `e.preventDefault()`, honeypot polje (isto kao Protokol), poruka
  o uspehu
- Scroll-reveal za sekcije ispod hero-a (može se ponovo koristiti isti obrazac kao
  na Protokol projektu)

**Bezbednost:** isti standard kao Protokol — honeypot, `rel="noopener noreferrer"`,
bez tajnih ključeva (ovde ih ionako nema, statična stranica)

**Performanse — OVDE JE NAJVAŽNIJE ZA OVAJ PROJEKAT:**
- `.glb` fajl od 7MB je "težak" u poređenju sa ostatkom sajta (Protokol je bio <1MB
  ukupno) — postavi `loading="lazy"` na `model-viewer` ako nije hero element, ili
  prihvati da hero mora odmah da se učita ali OBAVEZNO stavi `poster` sliku
- Meri Lighthouse Performance PRE i POSLE dodavanja 3D modela — očekuj niži skor nego
  kod Protokola, to je normalno za 3D sadržaj, ali ne sme da padne ispod ~75

**Testiranje:**
- Isti Lighthouse + Console + View Source ritual kao kod Protokola
- DODATNO: testiraj `model-viewer` na sporoj mreži (DevTools → Network → Slow 3G) —
  da li poster slika radi kako treba dok se .glb učitava
- Testiraj touch rotaciju na pravom telefonu, ne samo DevTools emulaciji

---

## REDOSLED FAZA

0. Brief i tehnički zahtevi (gore) — potvrdi da razumeš pre početka
1. Setup projekta (folder, fajlovi, `models/smartwatch.glb` ubačen, git init, commit)
2. HTML struktura — sve sekcije, sav tekst iz `copy.md`, bez CSS-a
3. Ubacivanje `<model-viewer>` u hero — samo da se model prikaže i rotira, bez ostatka stila
4. CSS — boje, fontovi, osnovni razmak
5. CSS — layout (flexbox/grid)
6. CSS — responsive
7. JavaScript — konfigurator (tekst/cena, i boja modela ako je podržano)
8. JavaScript — newsletter forma sa honeypot zaštitom
9. JavaScript — scroll-reveal animacije
10. Bezbednost — provera honeypot, `rel` atributi
11. Performanse — poster slika, provera veličine .glb, Lighthouse merenje
12. Pristupačnost — `alt` na `model-viewer`, kontrast, fokus stanja
13. Testiranje — checklist + mobilni touch test za 3D rotaciju
14. Deploy — GitHub + Netlify, isto kao Protokol
15. Predaja — README sa OBAVEZNOM atribucijom 3D modela istaknutom na vrhu

**RADI JEDNU FAZU, ČEKAJ POTVRDU, PA SLEDEĆU.** Posle svake faze: šta je urađeno,
šta da testiram, šta je sledeće.


# VIZUELNI STANDARDI

Ovo je portfolio projekat i vizuelni kvalitet ima isti prioritet kao i funkcionalnost.

Prije implementacije svake sekcije razmisli kako može izgledati modernije, elegantnije i premium.

Nemoj koristiti generična rješenja.

Prioriteti:

- odlična tipografija
- mnogo praznog prostora
- jasna hijerarhija
- moderan raspored elemenata
- suptilni hover efekti
- diskretne animacije
- odličan responsive dizajn

Animacije treba da budu kratke i elegantne.

Koristi blur, glow i opacity umjesto agresivnih efekata.

Svaka sekcija treba izgledati dovoljno dobro da može biti portfolio screenshot.