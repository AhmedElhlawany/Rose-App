import React from 'react';
import { cn } from '@/lib/utility/tailwind-merge';

interface MainHeadingProps {
  heading?: string;
  paragraph?: string;
  className?: string;
}

export default function MainHeading({
  heading,
  paragraph,
  className,
}: MainHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center',
        className,
      )}
    >
      {heading && (
        <p
          className="mb-2 text-sm sm:text-base font-bold uppercase leading-none tracking-[0.25em] text-[#FF668B] dark:text-[#D75458]"
          style={{ fontFamily: 'Sarabun' }}
        >
          {heading}
        </p>
      )}
      {paragraph && (
        <h2 className="relative w-fit pb-1 inline-block text-2xl sm:text-[2.3rem] font-bold leading-none text-[#741C21] dark:text-[#FFC2D0] before:absolute before:left-1/2 before:translate-x-[-50%] sm:before:translate-x-0 sm:before:left-0 before:bottom-0 before:z-[-1] before:h-[17px] before:w-[165px] sm:before:w-[420px] before:rounded-br-[20px] before:rounded-tr-[20px] before:bg-[#FFE0E7] dark:before:bg-[#3F3F46] after:absolute sm:after:left-0 after:-translate-x-1/2 sm:after:translate-x-0 after:left-1/2 after:bottom-[-0px] after:z-[1] after:h-[2px] after:w-[165px] after:bg-[#E65073] dark:after:bg-[#FF668B]  ">
          {paragraph}
        </h2>
      )}
    </div>
  );
}
