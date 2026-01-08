import { HeroService } from '../types/hero-service';

export const heroService: HeroService[] = [
  {
    id: 1,
    alt: 'truck',
    img: '/icons/truck.svg',
    imgDark: '/icons/truck-dark.svg',
    text: 'For orders above 120 EGP',
    title: 'free delivery',
  },
  {
    id: 2,
    alt: 'refresh',
    img: '/icons/refresh.svg',
    imgDark: '/icons/refresh-dark.svg',
    text: 'Refunds within 30 days',
    title: 'get refund',
  },
  {
    id: 3,
    alt: 'shield-check',
    img: '/icons/shield-check.svg',
    imgDark: '/icons/shield-check-dark.svg',
    text: '100% Secure Payment',
    title: 'safe payment',
  },
  {
    id: 4,
    alt: 'headset',
    img: '/icons/headset.svg',
    imgDark: '/icons/headset-dark.svg',
    text: 'Contact us at any time',
    title: '24/7 support',
  },
];
