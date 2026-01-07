import Image from 'next/image';
import React from 'react';

export default function HeroService({
  img,
  alt,
  text,
  title,
}: {
  img: string;
  alt: string;
  text: string;
  title: string;
}) {
  return (
    <div className="lg:flex-row flex flex-col items-center justify-center gap-2 px-10 py-10 sm:mx-0 lg:gap-4 lg:flex lg:items-center lg:justify-center">
      {/* Image Part */}
      <figure className="flex size-14 shrink-0 items-center justify-center rounded-[2.0313rem] bg-[#A6252A]">
        <Image
          src={img}
          width={40}
          height={40}
          alt={alt}
          className="shrink-0"
          priority
        />
      </figure>

      {/* Title Part */}
      <figcaption className="flex flex-col items-center justify-center gap-1 lg:items-start">
        <p className=" text-lg sm:text-xl font-semibold capitalize text-[#A6252A]">
          {title}
        </p>
        <span className="text-sm text-center font-normal text-[#71717A]">{text}</span>
      </figcaption>
    </div>
  );
}
