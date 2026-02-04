'use client';

import React from 'react';
import { useOccasion } from '../../occasions/_hooks/use-occasion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utility/tailwind-merge';

export default function OccasionFilterList() {
  // Hook
  const { occasion } = useOccasion();
  console.log(occasion);

  return (
    <section className="grid grid-cols-2 gap-2">
      {occasion?.occasions.map((item) => {
        const imageUrl = `https://flower.elevateegy.com/uploads/${item.image}`;

        return (
          <Button
            key={item._id}
            variant="carousel"
            className={cn(
              'group relative h-auto w-auto overflow-hidden rounded-sm p-0',
              'before:absolute before:inset-0 before:bg-black/50 before:transition',
              'hover:before:bg-black/40',
            )}
          >
            <Image
              src={imageUrl}
              width={302}
              height={74}
              alt={item.name}
              priority
              className="h-[6.25rem] w-full object-cover lg:h-[4.625rem] lg:w-[18.875rem]"
            />

            <span className="absolute inset-10 z-10 flex items-center justify-center text-base font-medium text-zinc-50">
              {item.name}
            </span>
          </Button>
        );
      })}
    </section>
  );
}
