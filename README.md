# zaSKOKI — strona wynajmu dmuchańców

Statyczna strona one-page firmy **zaSKOKI** (wynajem dmuchanych zjeżdżalni i gier
plenerowych w Wielkopolsce). Astro — czysty HTML/CSS z minimalną, ładowaną „punktowo"
porcją JavaScriptu.

## Spis treści

1. [Stack](#stack)
2. [Uruchomienie lokalne](#uruchomienie-lokalne)
3. [Budowanie](#budowanie)
4. [Wydajność (Lighthouse)](#wydajność-lighthouse)
5. [Struktura](#struktura)
6. [Najczęstsze edycje](#najczęstsze-edycje) — treści, cennik, zdjęcia, kolory, social
7. [Kontakt](#kontakt)
8. [SEO](#seo)
9. [Deploy na Cloudflare](#deploy-na-cloudflare)

---

## Stack

| Element                  | Technologia                                                                      |
| ------------------------ | -------------------------------------------------------------------------------- |
| Framework                | [Astro](https://astro.build) (build statyczny, TypeScript, bez frameworka UI)    |
| Przejścia stron          | wbudowane View Transitions (`<ClientRouter />`)                                  |
| Karuzele zdjęć w kartach | natywny **scroll-snap CSS** (bez JS — niezawodne na iOS Safari)                   |
| Podgląd zdjęć (lightbox) | [GLightbox](https://biati-digital.github.io/glightbox/) (ładowany leniwie)       |
| Animacje pojawiania się  | natywny `IntersectionObserver` + klasy CSS                                       |
| Optymalizacja obrazów    | `astro:assets` → WebP, responsywne rozmiary, lazy loading, preload zdjęcia LCP   |
| Fonty                    | Baloo 2 + Nunito, samohostowane (subset latin + latin-ext, `font-display: swap`) |
| CSS                      | wstawiany inline do HTML (`inlineStylesheets: 'always'`) — zero blokad renderu    |
| Akordeon FAQ             | natywny `<details>` — zero JS                                                    |
| Mapa strony / robots     | `@astrojs/sitemap` + dynamiczny `robots.txt`                                     |

GLightbox (podgląd zdjęć) doładowuje się dopiero, gdy sekcja „Oferta" zbliża się do ekranu —
na starcie strona ładuje praktycznie sam HTML z wstawionym inline CSS, bez blokujących żądań.

---

## Uruchomienie lokalne

Wymagany **Node.js 20+** (zalecany 22).

```bash
npm install        # raz
npm run dev        # http://localhost:4321
```

---

## Budowanie

```bash
npm run build      # gotowa strona → folder dist/
npm run preview    # podgląd zbudowanej wersji
npm run check      # kontrola typów (powinno być 0 błędów)
```

Na hosting trafia zawartość `dist/`.

---

## Wydajność (Lighthouse)

Pomiar produkcyjny (Lighthouse, mediana z kilku przebiegów):

| Kategoria          | 📱 Mobile | 🖥️ Desktop |
| ------------------ | :-------: | :--------: |
| **Performance**    |  **92**   |  **100**   |
| **Accessibility**  |  **100**  |  **100**   |
| **Best Practices** |  **100**  |  **100**   |
| **SEO**            |  **100**  |  **100**   |

Core Web Vitals: **CLS 0** (zero przeskoków układu) i **TBT 0 ms** (zero blokowania wątku) na
obu wersjach. Mobilne LCP ~3,0 s pochodzi z dławionego „wolnego 4G" w teście laboratoryjnym —
na realnym łączu (4G/5G/WiFi) zdjęcie hero ładuje się ~1–1,5 s.

Zastosowane optymalizacje: cały CSS inline (zero blokad renderu), fonty w subsecie
latin + latin-ext, preload zdjęcia hero (element LCP), karuzela na natywnym scroll-snap
zamiast biblioteki JS.

> Test lokalnie: `npx lighthouse https://zaskoki.ufeq.workers.dev/ --view`
> (dla wersji desktop dodaj `--preset=desktop`).

---

## Struktura

```
zaskok/
├── astro.config.mjs        # adres strony (site), sitemap, obrazy
├── public/                 # kopiowane 1:1 (favicon, og-image, _headers)
└── src/
    ├── assets/             # zdjęcia (optymalizowane przy buildzie)
    │   ├── dmuchance/       #   – zdjęcia atrakcji
    │   └── zycie/           #   – zdjęcia w sekcji „O nas"
    ├── data/               # ⭐ TREŚCI DO EDYCJI
    │   ├── dmuchance.ts     #   – atrakcje: nazwa, wymiary, wiek, cena, zdjęcia
    │   ├── faq.ts           #   – pytania i odpowiedzi
    │   └── firma.ts         #   – telefon, miejscowości, rabat, social
    ├── layouts/Layout.astro # <head>, meta, Open Graph, dane SEO (JSON-LD)
    ├── components/          # sekcje (Header, Hero, Oferta, FAQ, Kontakt…)
    ├── pages/               # index.astro, 404.astro, robots.txt.ts
    └── styles/global.css    # ⭐ KOLORY, fonty, odstępy (zmienne CSS)
```

---

## Najczęstsze edycje

### 🛝 Atrakcje i cennik → `src/data/dmuchance.ts`

Jedyne miejsce, które edytujesz, by dodać lub zmienić dmuchańca — karty generują się z tej
listy. Pola wpisu:

```ts
{
  id: 'zyziu',                       // unikalny, mała litera, bez spacji
  nazwa: 'ZYZIU',
  motyw: 'Zjeżdżalnia Auta · Zygzak',
  akcent: '#E2342B',                 // kolor podtytułu
  wymiary: 'Zjazd 4,7 m',
  liczbaDzieci: 'do 6 dzieci',
  wiek: 'Dzieci 4+',
  cena: '900 zł',
  zdjecia: [
    { src: zyziu1, alt: 'opis zdjęcia (dostępność/SEO)' },
  ],
}
```

**Nowa atrakcja:** wrzuć zdjęcia do `src/assets/dmuchance/`, zaimportuj je na górze pliku
(są przykłady) i dopisz obiekt do tablicy.

### 📞 Telefon, miejscowości, rabat, social → `src/data/firma.ts`

Jedno miejsce na dane firmy — zmiana aktualizuje nagłówek, hero, kontakt, stopkę i dane SEO.
Tu też wpisujesz linki do Facebooka/Instagrama (`social`) — ikonki w stopce pojawią się
**tylko, gdy pole ma wartość**.

### ❓ Pytania (FAQ) → `src/data/faq.ts`

Lista pytań i odpowiedzi. Pierwsze pytanie jest domyślnie rozwinięte.

### 🖼️ Zdjęcia

Dwie metody podmiany w `src/assets/dmuchance/` i `src/assets/zycie/`:

- **Najprościej:** podmień pliki, zachowując te same nazwy — nic więcej nie trzeba.
- **Własne nazwy:** wrzuć nowe pliki i popraw importy na górze `src/data/dmuchance.ts`.

Astro samo zrobi WebP/AVIF i miniatury. Wrzucaj zdjęcia w dużej rozdzielczości (1200–1600 px);
kadr 4:3 robi się sam.

### 🎨 Kolory i fonty → `src/styles/global.css`

Kolory marki to zmienne CSS na górze pliku (`--c-orange`, `--c-yellow`, `--c-blue` …).
Zmiana jednej zmiennej aktualizuje całą stronę.

> Kontrast: biały tekst na pomarańczowych przyciskach jest zgodny z projektem, ale nie
> spełnia rygorystycznego WCAG AA 4.5:1. Jeśli chcesz pełne AA kosztem wyglądu — przyciemnij
> `--c-orange` (np. do `#C75200`). Kolory pomocnicze (szarości, błękity etykiet) są już pod AA.

---

## Kontakt

Sekcja „Kontakt" jest telefoniczna — duży przycisk z numerem (klik = połączenie). Bez
formularza. Gdybyś chciał(a) dodać formularz, najprościej przez darmowy
[Formspree](https://formspree.io): wstaw w `src/components/Kontakt.astro`
`<form action="https://formspree.io/f/TWOJE_ID" method="POST">` z polami `name="imie"`,
`name="telefon"`, `name="wiadomosc"`.

---

## SEO

- Domena ustawiona w `astro.config.mjs` (`site: 'https://zaskoki.pl'`) — od niej zależą
  kanoniczne URL-e, Open Graph, sitemapa i robots.
- Meta, `lang="pl"`, canonical, Open Graph i Twitter Card — `src/layouts/Layout.astro`.
- Dane strukturalne (JSON-LD): `LocalBusiness` (telefon, obszar, ceny, katalog atrakcji)
  - `FAQPage` — generowane z `src/data/`. Linki social trafiają do `sameAs`.
- `robots.txt` i `sitemap-index.xml` generują się automatycznie.
- Obrazek podglądu w social media: `public/og-image.jpg` (1200×630) — można podmienić.

Po publikacji warto: dodać domenę do **Google Search Console** i wysłać
`https://zaskoki.pl/sitemap-index.xml` oraz założyć **wizytówkę Google (Profil Firmy)**.

---

## Deploy na Cloudflare

Strona jest w pełni statyczna i wdrażana z linii poleceń przez **Wrangler** (Cloudflare
Workers — Static Assets; konfiguracja w `wrangler.jsonc`). Darmowy plan w zupełności wystarcza.

### 1. Logowanie (tylko za pierwszym razem)

Zanim cokolwiek wdrożysz, musisz raz zalogować się do Cloudflare:

```bash
npx wrangler login
```

Otworzy się przeglądarka z prośbą o autoryzację konta — kliknij **Allow**. Logowanie zapamiętuje
się na danym komputerze, więc robisz to **tylko raz** (kolejne wdrożenia go nie wymagają).

> Sprawdzenie, czy jesteś zalogowany: `npx wrangler whoami`.

### 2. Publikacja

Po zalogowaniu wdrażasz jedną komendą (buduje stronę i wysyła `dist/` na Cloudflare):

```bash
npm run deploy
```

Równoważnie, krok po kroku:

```bash
npm run build        # zbuduj → dist/
npx wrangler deploy  # wyślij na Cloudflare
```

Po wdrożeniu strona jest pod `https://zaskoki.<twoja-subdomena>.workers.dev`. Każda kolejna
publikacja to po prostu ponowne `npm run deploy`.

### 3. Własna domena

W panelu [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → projekt
**zaskoki** → **Settings → Domains & Routes** → dodaj `zaskoki.pl` (domena musi być w Twoim
koncie Cloudflare; DNS skonfiguruje się automatycznie).

Plik `public/_headers` ustawia cache i nagłówki bezpieczeństwa (Cloudflare czyta go automatycznie),
a strona 404 jest obsługiwana zgodnie z `wrangler.jsonc`.
