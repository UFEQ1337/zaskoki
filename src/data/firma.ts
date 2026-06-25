// Dane firmy — używane w nagłówku, hero, kontakcie, stopce i danych SEO (JSON-LD).
export const firma = {
  nazwa: "zaSKOKI",
  tagline: "Zaskocz siebie i innych na Twojej imprezie",
  opis: "Wynajem dmuchańców i gier plenerowych na urodziny, komunie, pikniki i imprezy firmowe w Wielkopolsce.",

  telefon: {
    display: "534 959 700",
    e164: "+48534959700", // format do linków tel:
  },

  email: "", // puste = ukryty

  // Linki do social mediów. Puste = ikonka się nie pojawia. Wpisz pełny adres, np. 'https://instagram.com/zaskoki'.
  social: {
    facebook: "",
    instagram: "",
  },

  miejscowosci: [
    "Września",
    "Słupca",
    "Środa Wielkopolska",
    "Swarzędz",
    "Gniezno",
    "Kostrzyn",
    "Witkowo",
    "Nekla",
  ],

  region: "Wielkopolska",

  rabat: {
    wartosc: "−20%",
    haslo: "Wypożycz 3 atrakcje i odbierz rabat −20%",
    badge: "3× = −20%",
  },

  cenaOd: 400,
  cenaDo: 900,
} as const;

export type Firma = typeof firma;
