// Pytania i odpowiedzi (FAQ). Pierwsze pytanie jest domyślnie rozwinięte.
export interface Pytanie {
  pytanie: string;
  odpowiedz: string;
}

export const faq: Pytanie[] = [
  {
    pytanie: 'Jak wypożyczyć atrakcję?',
    odpowiedz:
      'Zadzwoń do nas. Ustalamy datę, miejscowość i model, a my przywozimy, rozkładamy i odbieramy sprzęt w umówionym terminie.',
  },
  {
    pytanie: 'Co w razie deszczu?',
    odpowiedz:
      'Bezpieczeństwo przede wszystkim — przy ulewie lub silnym wietrze przekładamy termin na inny dzień bez dodatkowych kosztów. Lekki deszcz zwykle nie przeszkadza w zabawie.',
  },
  {
    pytanie: 'Ile kosztuje wynajem?',
    odpowiedz:
      'Każdą atrakcję wynajmiesz na 4 godziny lub na cały dzień. Ceny za 4 h zaczynają się od 350 zł, a za cały dzień od 500 zł (do 700 zł — w zależności od atrakcji). Przy wynajmie 3 atrakcji naraz dajemy −20% rabatu. Dojazd w obrębie naszego obszaru działania ustalamy indywidualnie.',
  },
  {
    pytanie: 'Czy dmuchańce są bezpieczne?',
    odpowiedz:
      'Tak. Każdą atrakcję dezynfekujemy po wynajmie, regularnie serwisujemy i prawidłowo kotwimy. Zalecamy też opiekę osoby dorosłej podczas zabawy.',
  },
  {
    pytanie: 'Jakie normy i dokumenty mają Wasze dmuchańce?',
    odpowiedz:
      'Nasze dmuchańce spełniają wszystkie wymagane normy i posiadają komplet dokumentów: ' +
      'zgodność z normą PN-EN 14960 (europejska norma bezpieczeństwa dmuchanych urządzeń do zabawy), ' +
      'orzeczenie techniczne (atest) potwierdzające sprawność sprzętu, ' +
      'DTR — Dokumentację Techniczno-Ruchową każdej atrakcji, ' +
      'oraz ubezpieczenie OC. Komplet dokumentów udostępniamy na życzenie.',
  },
];
