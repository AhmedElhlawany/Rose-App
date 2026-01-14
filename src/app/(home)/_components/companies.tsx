'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { companiesList } from '@/lib/constants/companies-list';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useRef } from 'react';

/**
 * Companies section displaying trusted partner logos in an auto-scrolling carousel
 */
const Companies = () => {
  // Autoplay plugin configuration for carousel
  const autoplay = useRef(
    Autoplay({
      delay: 1500,
    }),
  );

  return (
    <section className="container mx-auto w-11/12 py-10">
      <div className="flex min-h-52 flex-col justify-center gap-5 rounded-3xl bg-maroon-50">
        {/* Trust indicator heading */}
        <p className="py-3 text-center text-4xl font-bold text-maroon-700">
          Trusted by over <span className="text-softPink-500">4.5k+</span>{' '}
          companies
        </p>

        {/* Auto-scrolling carousel of company logos */}
        <Carousel
          className="mx-auto w-full max-w-6xl"
          opts={{
            align: 'start',
            loop: true,
            dragFree: true,
          }}
          plugins={[autoplay.current]}
        >
          <CarouselContent>
            {/* Render each company logo */}
            {companiesList.map((company, index) => (
              <CarouselItem key={index} className="relative h-14 basis-1/5">
                <Image
                  src={company.src}
                  alt={company.alt}
                  fill
                  className="object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Companies;
