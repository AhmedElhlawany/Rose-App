import Image from 'next/image';
import React from 'react';

export default function HeroService({
  img,
  alt,
  text,
  title,
  imgDark,
}: {
  img: string;
  alt: string;
  text: string;
  title: string;
  imgDark: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-10 py-10 sm:mx-0 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-4">
      {/* Image Part */}
      <figure className="flex size-14 shrink-0 items-center justify-center rounded-[2.0313rem] bg-[#A6252A] dark:bg-[#FFC2D0]">
        {/*Image In Light Mode */}
        <Image
          src={img}
          width={40}
          height={40}
          alt={alt}
          className="block shrink-0 dark:hidden"
          priority
        />

        {/*Image In Dark Mode */}
        <Image
          src={imgDark}
          width={40}
          height={40}
          alt={alt}
          className="hidden shrink-0 dark:block"
          priority
        />
      </figure>

      {/* Title Part */}
      <figcaption className="flex flex-col items-center justify-center gap-1 lg:items-start">
        <p className="text-lg font-semibold capitalize text-[#A6252A] dark:text-[#FFC2D0] sm:text-xl">
          {title}
        </p>
        <span className="text-center text-sm font-normal text-[#71717A] dark:text-zinc-300">
          {text}
        </span>
      </figcaption>
    </div>
  );
}
