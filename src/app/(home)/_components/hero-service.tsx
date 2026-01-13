import { LucideIcon } from 'lucide-react';

import React from 'react';

export default function HeroService({
  Icon,
  text,
  title,
}: {
  Icon: LucideIcon;
  text: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-4 py-10 sm:mx-0 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-4">
      {/* Image Part */}
      <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#A6252A] dark:bg-[#FFC2D0]">
        {/* Icon */}
        <Icon className="block size-10 text-white dark:text-black" />
      </div>

      {/* Title Part */}
      <div className="flex flex-col items-center justify-center gap-1 lg:items-start">
        <p className="text-lg font-semibold capitalize text-[#A6252A] dark:text-[#FFC2D0] sm:text-xl">
          {title}
        </p>

        <span className="text-center text-sm font-normal text-[#71717A] dark:text-zinc-300 md:text-start">
          {text}
        </span>
      </div>
    </div>
  );
}
