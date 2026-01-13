'use client';

import React from 'react';
import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

import { HeroSlider } from '@/lib/types/hero-slider';
import { cn } from '@/lib/utility/tailwind-merge';
import { DotButton, useDotButton } from './hero-carousel-dot';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './hero-carousel-button';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type PropType = {
  slides: HeroSlider[];
  options?: EmblaOptionsType;
};

const HeroCarousel: React.FC<PropType> = ({ slides, options }) => {
  // Navigation
  const router = useRouter();

  // Hook
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Function
  const goToProductPage = () => {
    router.push('/product');
  };

  return (
    <section
      className={cn(
        'relative h-[27.5rem] w-full max-w-[59.6875rem] overflow-hidden rounded-2xl xl:max-w-none',
        "after:pointer-events-none after:absolute after:inset-0 after:z-10 after:bg-gradient-to-r after:from-black after:via-transparent after:to-transparent after:opacity-80 after:content-['']",
      )}
    >
      {/* viewport */}
      <div className="h-full overflow-hidden" ref={emblaRef}>
        {/* container */}
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative h-[27.5rem] flex-[0_0_100%]"
            >
              <Image
                src={slide.img}
                alt={slide.alt}
                fill
                className="max-w-[59.6875rem] rounded-2xl object-center sm:object-cover xl:max-w-none"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-10 z-20 flex flex-col gap-[.375rem] pl-9 sm:bottom-0">
        <p className="text-start text-4xl font-semibold capitalize text-white">
          say it with flowers
        </p>
        <span className="h-12 text-start text-base text-white first-letter:capitalize">
          Elegant gifts for every special moment.
        </span>
        <Button
          onClick={goToProductPage}
          // TODO Waiting for the design system
          className="mb-9 w-32 rounded-xl bg-[#FBEAEA] px-4 py-2 text-base font-normal text-[#741C21]"
        >
          I’m buying!
        </Button>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-8 right-8 mt-4 hidden h-[2.1875rem] w-[4.625rem] items-center justify-center rounded-full bg-[#FBEAEA] px-4 sm:flex">
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className=""
        />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      {/* Dots */}
      <div className="absolute right-8 top-6 mt-2 flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            // TODO Waiting for the design system
            className={`h-2 w-2 rounded-full ${
              index === selectedIndex ? 'h-2 w-9 bg-[#A6252A]' : 'bg-[#FBEAEA]'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
