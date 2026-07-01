// Dane firmy — używane w nagłówku, hero, kontakcie, stopce i danych SEO (JSON-LD).
export const firma = {
  nazwa: "zaSKOKI",
  tagline: "Zaskocz siebie i innych na Twojej imprezie",
  opis: "Wynajem dmuchańców i gier plenerowych na urodziny, komunie, pikniki i imprezy firmowe w Wielkopolsce.",

  telefon: {
    display: "785 616 957",
    e164: "+48785616957", // format do linków tel:
  },

  email: "", // puste = ukryty

  // Linki do social mediów. Puste = ikonka się nie pojawia. Wpisz pełny adres, np. 'https://instagram.com/zaskoki'.
  social: {
    facebook: "",
    instagram: "",
  },

  miejscowosci: [
    "Słupca",
    "Strzałkowo",
    "Witkowo",
    "Gutowo",
    "Września",
    "Zagórów",
    "Ciążeń",
    "Ląd",
    "Lądek",
    "Sługocin",
    "Golina",
    "Konin",
    "Cienin Zaborny",
    "Cienin Kościelny",
    "Rozalin",
    "Budzisław Kościelny",
    "Koszuty",
    "Kowalewo",
  ],

  region: "Wielkopolska",

  // Certyfikaty / dokumenty potwierdzające bezpieczeństwo dmuchańców — pokazywane na kartach i w modalu.
  certyfikaty: ["PN-EN 14960", "Atest", "DTR", "OC"],

  rabat: {
    wartosc: "−20%",
    haslo: "Wypożycz 3 atrakcje i odbierz rabat −20%",
    badge: "Trzeci wynajem −20%",
  },

  cenaOd: 350,
  cenaDo: 700,
} as const;

export type Firma = typeof firma;
