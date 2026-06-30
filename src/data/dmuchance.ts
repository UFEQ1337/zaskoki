// Katalog atrakcji — karty w sekcji „Oferta" generują się z tej listy.
// Dodanie atrakcji: wrzuć zdjęcie do src/assets/dmuchance/, zaimportuj je i dopisz wpis.
import type { ImageMetadata } from 'astro';

import zyziuBanner from '../assets/dmuchance/zyziu-banner.jpg';
import steveBanner from '../assets/dmuchance/steve-banner.jpg';
import bobiBanner from '../assets/dmuchance/bobi-banner.jpg';
import dartBanner from '../assets/dmuchance/dart-banner.jpg';

// Zdjęcia do sekcji „Dodatkowa oferta" (galeria z podpisami).
import lifeRainbow from '../assets/zycie/life-rainbow.jpg';
import lifeFoam from '../assets/zycie/life-foam.jpg';
import lifeCandy from '../assets/zycie/life-candy.jpg';
import lifeSoccer from '../assets/zycie/life-soccer.jpg';
import lifePopcorn from '../assets/zycie/life-popcorn.jpg';
import lifeSlush from '../assets/zycie/life-slush.jpg';

export interface Zdjecie {
  src: ImageMetadata;
  alt: string;
}

export interface Parametr {
  label: string;
  value: string;
}

export interface Dmuchaniec {
  id: string;
  nazwa: string;
  motyw: string;
  akcent: string;
  wymiary: string; // skrót pokazywany w „pill" (np. wysokość zjazdu)
  liczbaDzieci: string;
  wiek: string;
  cena: string;
  opis: string; // 1–2 zdania do dymka ze szczegółami
  parametry: Parametr[]; // pełna specyfikacja techniczna w modalu
  zdjecie: Zdjecie; // jedno zdjęcie = okładka karty
}

export const dmuchance: Dmuchaniec[] = [
  {
    id: 'zyziu',
    nazwa: 'ZYZIU',
    motyw: 'Zjeżdżalnia Auta · Zygzak',
    akcent: '#D62719',
    wymiary: 'Zjazd 4,7 m',
    liczbaDzieci: 'do 6 dzieci',
    wiek: 'Dzieci 4+',
    cena: '900 zł',
    opis:
      'Kolorowa dmuchana zjeżdżalnia w motywie wyścigowych aut. Długi, bezpieczny zjazd i mnóstwo frajdy dla małych kierowców.',
    parametry: [
      { label: 'Wymiary', value: '6 × 4 m' },
      { label: 'Wysokość zjazdu', value: '4,7 m' },
      { label: 'Pojemność', value: 'do 6 dzieci naraz' },
      { label: 'Wiek', value: 'od 4 lat' },
      { label: 'Zasilanie', value: '230 V — dmuchawa w zestawie' },
      { label: 'Wymagane miejsce', value: 'min. 7 × 5 m, równe podłoże' },
    ],
    zdjecie: { src: zyziuBanner, alt: 'Dmuchana zjeżdżalnia ZYZIU (motyw aut) – baner z ceną i wymiarami' },
  },
  {
    id: 'steve',
    nazwa: 'STEVE',
    motyw: 'Zjeżdżalnia Minecraft',
    akcent: '#2E7D26',
    wymiary: 'Zjazd 3,2 m',
    liczbaDzieci: 'do 5 dzieci',
    wiek: 'Dzieci 4+',
    cena: '700 zł',
    opis:
      'Zjeżdżalnia w klimacie Minecraft — uwielbiana przez dzieci i nastolatków. Solidna konstrukcja i wysoki zjazd.',
    parametry: [
      { label: 'Wymiary', value: '8 × 4 m' },
      { label: 'Wysokość zjazdu', value: '3,2 m' },
      { label: 'Pojemność', value: 'do 5 dzieci naraz' },
      { label: 'Wiek', value: 'od 4 lat' },
      { label: 'Zasilanie', value: '230 V — dmuchawa w zestawie' },
      { label: 'Wymagane miejsce', value: 'min. 9 × 5 m, równe podłoże' },
    ],
    zdjecie: { src: steveBanner, alt: 'Dmuchana zjeżdżalnia STEVE (styl Minecraft) – baner z ceną i wymiarami' },
  },
  {
    id: 'bobi',
    nazwa: 'BOBI',
    motyw: 'Zjeżdżalnia Budowlana',
    akcent: '#C44D0A',
    wymiary: 'Zjazd 4 m',
    liczbaDzieci: 'do 6 dzieci',
    wiek: 'Dzieci 4+',
    cena: '800 zł',
    opis:
      'Zjeżdżalnia o tematyce budowlanej z dużą powierzchnią do wspinania i zjeżdżania — hit każdej imprezy.',
    parametry: [
      { label: 'Wymiary', value: '8 × 5 m' },
      { label: 'Wysokość zjazdu', value: '4 m' },
      { label: 'Pojemność', value: 'do 6 dzieci naraz' },
      { label: 'Wiek', value: 'od 4 lat' },
      { label: 'Zasilanie', value: '230 V — dmuchawa w zestawie' },
      { label: 'Wymagane miejsce', value: 'min. 9 × 6 m, równe podłoże' },
    ],
    zdjecie: { src: bobiBanner, alt: 'Dmuchana zjeżdżalnia BOBI (tematyka budowlana) – baner z ceną i wymiarami' },
  },
  {
    id: 'dart',
    nazwa: 'FOOD DART',
    motyw: 'Dmuchany dart piłkarski',
    akcent: '#0C6E9C',
    wymiary: 'Rozmiar 3 × 3 m',
    liczbaDzieci: 'do 4 graczy',
    wiek: 'Każdy wiek',
    cena: '400 zł',
    opis:
      'Dmuchany dart piłkarski — kopiesz piłką w wielką tarczę na rzepy. Świetna zabawa dla dzieci i dorosłych.',
    parametry: [
      { label: 'Wymiary', value: '3 × 3 m' },
      { label: 'Pojemność', value: 'do 4 graczy' },
      { label: 'Wiek', value: 'każdy wiek' },
      { label: 'W zestawie', value: 'piłki na rzepy' },
      { label: 'Zasilanie', value: '230 V — dmuchawa w zestawie' },
      { label: 'Wymagane miejsce', value: 'min. 5 × 5 m' },
    ],
    zdjecie: { src: dartBanner, alt: 'Dmuchany dart piłkarski FOOD DART – baner z ceną i wymiarami' },
  },
];

// — Dodatkowa oferta (galeria z podpisami) —
// Pozycje bez `zdjecie` renderują kafelek-placeholder (kolor + emoji) do czasu wgrania zdjęcia.
export interface Dodatek {
  id: string;
  nazwa: string;
  podpis: string;
  cenaOd: string;
  zdjecie?: ImageMetadata;
  alt?: string;
  emoji?: string; // dla kafelka-placeholdera
  kolor?: string; // tło kafelka-placeholdera
}

export const dodatki: Dodatek[] = [
  {
    id: 'zamki',
    nazwa: 'Zamki dmuchane',
    podpis: 'Zjeżdżalnie i dmuchane place zabaw',
    cenaOd: 'od 400 zł',
    zdjecie: lifeRainbow,
    alt: 'Roześmiane dziecko z rękami w górze — radość z dmuchanych zabaw',
  },
  {
    id: 'piana',
    nazwa: 'Piana party',
    podpis: 'Morze piany i mnóstwo śmiechu',
    cenaOd: 'od 350 zł',
    zdjecie: lifeFoam,
    alt: 'Dzieci bawiące się w pianie podczas piana party',
  },
  {
    id: 'popcorn',
    nazwa: 'Popcorn',
    podpis: 'Świeży, ciepły popcorn prosto z maszyny',
    cenaOd: 'od 200 zł',
    zdjecie: lifePopcorn,
    alt: 'Dzieci jedzące świeży popcorn na plenerowej imprezie',
  },
  {
    id: 'wata',
    nazwa: 'Wata cukrowa',
    podpis: 'Puszysta, kolorowa chmurka',
    cenaOd: 'od 200 zł',
    zdjecie: lifeCandy,
    alt: 'Dziecko z kolorową watą cukrową na pikniku',
  },
  {
    id: 'dart',
    nazwa: 'Dart',
    podpis: 'Piłkarska tarcza na rzepy — FOOD DART',
    cenaOd: 'od 400 zł',
    zdjecie: lifeSoccer,
    alt: 'Dziecko kopiące piłkę — gra w dmuchany dart piłkarski',
  },
  {
    id: 'slush',
    nazwa: 'Slush / granita',
    podpis: 'Mrożony napój w wielu smakach',
    cenaOd: 'od 200 zł',
    zdjecie: lifeSlush,
    alt: 'Troje dzieci z kolorowymi mrożonymi napojami slush',
  },
];
