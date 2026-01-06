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
          className="mb-2 text-base font-bold uppercase leading-none tracking-[0.25em] text-[#FF668B]"
          style={{ fontFamily: 'Sarabun' }}
        >
          {heading}
        </p>
      )}
      {paragraph && (
        <h2 className="relative pb-1 inline-block text-[2.3rem] font-bold leading-none tracking-normal text-[#741C21] before:absolute before:left-0 before:bottom-0 before:z-[-1] before:h-[17px] before:w-[402px] before:rounded-br-[20px] before:rounded-tr-[20px] before:bg-[#FFE0E7] after:absolute after:left-0 after:bottom-[-0px] after:z-[1] after:h-[2px] after:w-[157px] after:bg-[#E65073]">
          {paragraph}
        </h2>
      )}
    </div>
  );
}
