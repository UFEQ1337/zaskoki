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
      'Ceny zaczynają się od 400 zł i sięgają 900 zł za dzień — w zależności od atrakcji. Przy wynajmie 3 atrakcji naraz dajemy −20% rabatu. Dojazd w obrębie naszego obszaru działania ustalamy indywidualnie.',
  },
  {
    pytanie: 'Czy dmuchańce są bezpieczne?',
    odpowiedz:
      'Tak. Każdą atrakcję dezynfekujemy po wynajmie, regularnie serwisujemy i prawidłowo kotwimy. Zalecamy też opiekę osoby dorosłej podczas zabawy.',
  },
];
