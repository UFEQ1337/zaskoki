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
6. [Najczęstsze edycje](#najczęstsze-edycje) — atrakcje/cennik, dodatki, zdjęcia, tło, logo, kolory
7. [Kontakt](#kontakt)
8. [SEO](#seo)
9. [Deploy na Cloudflare](#deploy-na-cloudflare)

---

## Stack

| Element                  | Technologia                                                                      |
| ------------------------ | -------------------------------------------------------------------------------- |
| Framework                | [Astro](https://astro.build) (build statyczny, TypeScript, bez frameworka UI)    |
| Przejścia stron          | wbudowane View Transitions (`<ClientRouter />`)                                  |
| Zdjęcia atrakcji         | pojedynczy baner na kartę (WebP, `object-fit: contain` — bez karuzeli)            |
| Szczegóły atrakcji       | własny modal (dymek) z parametrami — lekki vanilla JS, dostępny z klawiatury      |
| Animacje pojawiania się  | natywny `IntersectionObserver` + klasy CSS                                       |
| Optymalizacja obrazów    | `astro:assets` → WebP, responsywne rozmiary, lazy loading, preload zdjęcia LCP   |
| Fonty                    | Baloo 2 + Nunito, samohostowane (subset latin + latin-ext, `font-display: swap`) |
| CSS                      | wstawiany inline do HTML (`inlineStylesheets: 'always'`) — zero blokad renderu    |
| Akordeon FAQ             | natywny `<details>` — zero JS                                                    |
| Mapa strony / robots     | `@astrojs/sitemap` + dynamiczny `robots.txt`                                     |

Bez zewnętrznych bibliotek JS do zdjęć — dymek ze szczegółami atrakcji to własny, lekki skrypt
osadzony w komponencie. Na starcie strona ładuje praktycznie sam HTML z wstawionym inline CSS,
bez blokujących żądań.

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

Pomiar na wersji live (Lighthouse, https://zaskoki.ufeq.workers.dev/):

| Kategoria          | 📱 Mobile | 🖥️ Desktop |
| ------------------ | :-------: | :--------: |
| **Performance**    |  **99**   |  **100**   |
| **Accessibility**  |  **100**  |  **100**   |
| **Best Practices** |  **100**  |  **100**   |
| **SEO**            |  **100**  |  **100**   |

Core Web Vitals: **CLS ~0** (zero przeskoków układu) i **TBT 0 ms** (zero blokowania wątku) na
obu wersjach. Desktop LCP ~0,5 s, mobilne LCP ~2,0 s (element LCP to zdjęcie hero). Brakujący
1 pkt Performance na mobile wynika z dławionego „wolnego 4G" w teście — na realnym łączu jeszcze
szybciej.

Zastosowane optymalizacje: cały CSS inline (zero blokad renderu), fonty w subsecie
latin + latin-ext, preload zdjęcia hero (element LCP), zdjęcia atrakcji jako pojedyncze
bannery (WebP, responsywne rozmiary) zamiast karuzeli z biblioteką JS.

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
    │   ├── dmuchance/       #   – bannery atrakcji (*-banner.jpg) + hero (zyziu-1.jpg)
    │   ├── zycie/           #   – zdjęcia dodatków (popcorn, wata, slush, piana…)
    │   ├── bg-party.jpg     #   – tło strony (motyw wizytówki)
    │   └── logo.png         #   – logo zaSKOKI.pl (nagłówek, stopka, favicon)
    ├── data/               # ⭐ TREŚCI DO EDYCJI
    │   ├── dmuchance.ts     #   – atrakcje (cennik 4h/dzień, wymiary, parametry) + dodatki
    │   ├── faq.ts           #   – pytania i odpowiedzi
    │   └── firma.ts         #   – telefon, miejscowości, rabat, certyfikaty, social
    ├── layouts/Layout.astro # <head>, meta, Open Graph, dane SEO (JSON-LD), tło strony
    ├── components/          # sekcje (Header, Hero, ONas, Oferta, Dodatki, Pakiety, FAQ, Kontakt…)
    ├── pages/               # index.astro, 404.astro, robots.txt.ts
    └── styles/global.css    # ⭐ KOLORY, fonty, odstępy, tło (zmienne CSS)
```

---

## Najczęstsze edycje

### 🛝 Atrakcje i cennik → `src/data/dmuchance.ts`

Jedyne miejsce, które edytujesz, by dodać lub zmienić dmuchańca — karty generują się z tej
listy. Cena jest podwójna: **za 4 h** i **za cały dzień** (tańsza, 4-godzinna jest wyróżniona
na karcie i w dymku). Pola wpisu:

```ts
{
  id: 'zyziu',                       // unikalny, mała litera, bez spacji
  nazwa: 'ZYZIU',
  motyw: 'Zamek z motywem Bajki Auta',
  akcent: '#D62719',                 // kolor podtytułu
  wymiary: '8,5 × 4,6 m',            // skrót pokazywany w „pill"
  liczbaDzieci: 'do 6 dzieci',
  wiek: 'Dzieci 4+',
  cena4h: '550 zł',                  // cena za 4 godziny
  cenaDzien: '700 zł',               // cena za cały dzień
  opis: 'Krótki opis do dymka „Szczegóły".',
  parametry: [                       // pełna specyfikacja w dymku „Szczegóły"
    { label: 'Długość × szerokość', value: '8,5 × 4,6 m' },
    { label: 'Wysokość', value: '7,2 m' },
    // …dowolne kolejne pary label/value
  ],
  zdjecie: { src: zyziuBanner, alt: 'opis zdjęcia (dostępność/SEO)' },
}
```

**Nowa atrakcja:** wrzuć baner do `src/assets/dmuchance/`, zaimportuj go na górze pliku
(są przykłady) i dopisz obiekt do tablicy `dmuchance`.

**Certyfikaty** (PN-EN 14960, Atest, DTR, OC) są wspólne dla wszystkich atrakcji — edytujesz je
raz w `firma.certyfikaty` (`src/data/firma.ts`); pokazują się na kartach i w dymku.

### 🎪 Dodatkowa oferta → `dodatki` w `src/data/dmuchance.ts`

Sekcja „Dodatkowa oferta" (popcorn, wata cukrowa, slush, piana party…) generuje się z tablicy
`dodatki` w tym samym pliku. Wpis ma `nazwa`, `podpis`, `cenaOd` oraz `zdjecie` + `alt`
(gdy brak `zdjecie`, kafelek pokazuje `emoji` na tle `kolor`).

### 📞 Telefon, miejscowości, rabat, certyfikaty, social → `src/data/firma.ts`

Jedno miejsce na dane firmy — zmiana aktualizuje nagłówek, hero, kontakt, stopkę i dane SEO.
Tu edytujesz też listę **miejscowości** (sekcja „O nas" i stopka), **certyfikaty** (badge na
kartach i w dymku) oraz linki do Facebooka/Instagrama (`social`) — ikonki w stopce pojawią się
**tylko, gdy pole ma wartość**.

### ❓ Pytania (FAQ) → `src/data/faq.ts`

Lista pytań i odpowiedzi. Pierwsze pytanie jest domyślnie rozwinięte.

### 🖼️ Zdjęcia

Dwie metody podmiany w `src/assets/dmuchance/` i `src/assets/zycie/`:

- **Najprościej:** podmień pliki, zachowując te same nazwy — nic więcej nie trzeba.
- **Własne nazwy:** wrzuć nowe pliki i popraw importy na górze `src/data/dmuchance.ts`.

Astro samo zrobi WebP i responsywne rozmiary. Wrzucaj zdjęcia w dużej rozdzielczości
(1200–1600 px). Bannery atrakcji pokazywane są w **całości** (`object-fit: contain`), więc mogą
być poziome lub pionowe; zdjęcia dodatków są kadrowane do 4:3.

### 🖼️ Tło strony i logo

- **Tło:** `src/assets/bg-party.jpg` — podmień plik (ta sama nazwa), aby zmienić grafikę tła.
  Na desktopie wypełnia ekran; na telefonie (`≤ 760 px`) jest zakotwiczone do góry — reguła
  w `global.css` (`.site-bg`).
- **Logo:** `src/assets/logo.png` (przezroczysty). Favicony (`public/favicon*`,
  `apple-touch-icon.png`) generowane są z logo — po jego zmianie warto je odtworzyć.

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
