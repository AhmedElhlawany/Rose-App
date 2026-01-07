import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
export default function Hero() {
  return (
    <main className="mx-auto flex w-full flex-col items-center justify-center gap-6 bg-red-300 px-10 pb-6 pt-10 sm:px-20 lg:flex lg:flex-row lg:items-center lg:justify-between">
      {/* Static Image */}
      <figure className="relative h-full max-h-[27.5rem] w-full flex-1 lg:max-w-[18.8125rem]">
        <Image
          src={'/images/gift.png'}
          width={301}
          height={440}
          alt="gift"
          className="h-full max-h-[27.5rem] w-full rounded-2xl"
        />
        <figcaption className="absolute bottom-0 flex flex-col gap-[.625rem] pb-6 pl-6 text-white">
          <Badge
            variant={'secondary'}
            className="w-full max-w-[8.75rem] py-[.125rem] pl-1 text-xs font-medium text-[#A6252A] first-letter:uppercase"
          >
            Staring from 10.99 EGP
          </Badge>

          <p className="h-20 w-full max-w-64 text-2xl font-semibold capitalize">
            special gifts for the people you love
          </p>
          <Button className="flex w-full max-w-32 items-center justify-center gap-[.375rem] rounded-xl bg-amber-300 px-4 py-2 text-base font-normal capitalize text-[#741C21]">
            shop now <ArrowRight size={16} />
          </Button>
        </figcaption>
      </figure>
    </main>
  );
}
