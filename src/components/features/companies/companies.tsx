'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useRef } from 'react';

const companiesList = [
  { src: '/coconut.svg', alt: 'coconut' },
  { src: '/ginyard.svg', alt: 'ginyard' },
  { src: '/lingoude.svg', alt: 'lingoude' },
  { src: '/velvet.svg', alt: 'velvet' },
  { src: '/ingoude.svg', alt: 'ingoude' },
  { src: '/habus.svg', alt: 'habus' },
];

const Companies = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 1500,
    }),
  );

  return (
    <div className="container mx-auto p-20">
      <div className="bg-maroon-50 flex min-h-52 flex-col justify-center gap-5 rounded-3xl">
        <p className="text-center text-maroon-700 py-3 text-4xl font-bold">
          Trusted by over <span className='text-softPink-500'>4.5k+</span> companies
        </p>

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
    </div>
  );
};

export default Companies;
