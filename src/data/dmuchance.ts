// Katalog atrakcji — karty w sekcji „Oferta" generują się z tej listy.
// Dodanie atrakcji: wrzuć zdjęcia do src/assets/dmuchance/, zaimportuj je i dopisz wpis.
import type { ImageMetadata } from 'astro';

import zyziu1 from '../assets/dmuchance/zyziu-1.jpg';
import zyziu2 from '../assets/dmuchance/zyziu-2.jpg';
import zyziuBanner from '../assets/dmuchance/zyziu-banner.jpg';
import steve1 from '../assets/dmuchance/steve-1.jpg';
import steve2 from '../assets/dmuchance/steve-2.jpg';
import steveBanner from '../assets/dmuchance/steve-banner.jpg';
import bobi1 from '../assets/dmuchance/bobi-1.jpg';
import bobi2 from '../assets/dmuchance/bobi-2.jpg';
import bobiBanner from '../assets/dmuchance/bobi-banner.jpg';
import dart1 from '../assets/dmuchance/dart-1.jpg';
import dartBanner from '../assets/dmuchance/dart-banner.jpg';

export interface Zdjecie {
  src: ImageMetadata;
  alt: string;
}

export interface Dmuchaniec {
  id: string;
  nazwa: string;
  motyw: string;
  akcent: string;
  wymiary: string;
  liczbaDzieci: string;
  wiek: string;
  cena: string;
  zdjecia: Zdjecie[]; // pierwsze zdjęcie jest okładką karty
}

export const dmuchance: Dmuchaniec[] = [
  {
    id: 'zyziu',
    nazwa: 'ZYZIU',
    motyw: 'Zjeżdżalnia Auta · Zygzak',
    akcent: '#E2342B',
    wymiary: 'Zjazd 4,7 m',
    liczbaDzieci: 'do 6 dzieci',
    wiek: 'Dzieci 4+',
    cena: '900 zł',
    zdjecia: [
      { src: zyziu1, alt: 'Dmuchana zjeżdżalnia ZYZIU z motywem aut – widok z przodu' },
      { src: zyziu2, alt: 'Dmuchana zjeżdżalnia ZYZIU – ujęcie z boku' },
      { src: zyziuBanner, alt: 'Dzieci bawiące się na dmuchanej zjeżdżalni ZYZIU' },
    ],
  },
  {
    id: 'steve',
    nazwa: 'STEVE',
    motyw: 'Zjeżdżalnia Minecraft',
    akcent: '#4CAF3E',
    wymiary: 'Zjazd 3,2 m',
    liczbaDzieci: 'do 5 dzieci',
    wiek: 'Dzieci 4+',
    cena: '700 zł',
    zdjecia: [
      { src: steve1, alt: 'Dmuchana zjeżdżalnia STEVE w stylu Minecraft – widok ogólny' },
      { src: steve2, alt: 'Dmuchana zjeżdżalnia STEVE – zbliżenie na zjazd' },
      { src: steveBanner, alt: 'Dmuchana zjeżdżalnia STEVE rozłożona na imprezie' },
    ],
  },
  {
    id: 'bobi',
    nazwa: 'BOBI',
    motyw: 'Zjeżdżalnia Budowlana',
    akcent: '#F08A24',
    wymiary: 'Zjazd 4 m',
    liczbaDzieci: 'do 6 dzieci',
    wiek: 'Dzieci 4+',
    cena: '800 zł',
    zdjecia: [
      { src: bobi1, alt: 'Dmuchana zjeżdżalnia BOBI o tematyce budowlanej – widok z przodu' },
      { src: bobi2, alt: 'Dmuchana zjeżdżalnia BOBI – ujęcie z boku' },
      { src: bobiBanner, alt: 'Dmuchana zjeżdżalnia BOBI gotowa do zabawy' },
    ],
  },
  {
    id: 'dart',
    nazwa: 'FOOD DART',
    motyw: 'Dmuchany dart piłkarski',
    akcent: '#1FA9E0',
    wymiary: 'Rozmiar 3 × 3 m',
    liczbaDzieci: 'do 4 graczy',
    wiek: 'Każdy wiek',
    cena: '400 zł',
    zdjecia: [
      { src: dart1, alt: 'Dmuchany dart piłkarski FOOD DART – tarcza na rzepy' },
      { src: dartBanner, alt: 'Gra w dmuchany dart piłkarski na pikniku' },
    ],
  },
];
