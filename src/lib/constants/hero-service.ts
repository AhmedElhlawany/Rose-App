import { Headset, RefreshCw, ShieldCheck, Truck } from 'lucide-react';
import { HeroService } from '../types/hero-service';

export const heroService: HeroService[] = [
  {
    id: 1,
    Icon: Truck,
    text: 'For orders above 120 EGP',
    title: 'free delivery',
  },
  {
    id: 2,
    Icon: RefreshCw,
    text: 'Refunds within 30 days',
    title: 'get refund',
  },
  {
    id: 3,
    Icon: ShieldCheck,
    text: '100% Secure Payment',
    title: 'safe payment',
  },
  {
    Icon: Headset,
    id: 4,
    text: 'Contact us at any time',
    title: '24/7 support',
  },
];
