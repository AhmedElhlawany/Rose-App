'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useRef } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { useTranslations, useLocale } from 'next-intl';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  review: string;
  date: string;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex justify-center gap-1">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < rating ? (
            <FaStar className="h-5 w-5 text-yellow-500" />
          ) : (
            <FaRegStar className="h-5 w-5 text-yellow-500" />
          )}
        </span>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="relative h-full transition-transform duration-300 hover:scale-105">
      {/* Avatar */}
      <div className="flex justify-center">
        <div className="relative z-10 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={128}
            height={128}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Card */}
      <div className="relative -mt-16 rounded-[32px] bg-white px-5 pb-5 pt-20 shadow-md transition-shadow duration-300 hover:shadow-lg">
        <h3 className="text-center text-base font-semibold text-[#27272A]">
          {testimonial.name}
        </h3>

        <div className="mb-4 lg:mb-6">
          <StarRating rating={testimonial.rating} />
        </div>

        <p
          className="mb-4 line-clamp-3 pb-2 text-center text-base leading-[100%] text-[#27272A] lg:mb-8"
          title={testimonial.review}
        >
          {testimonial.review}
        </p>

        <p className="text-center text-sm text-gray-400">{testimonial.date}</p>
      </div>
    </div>
  );
};

export default function TestimonialsCarousel() {
  const t = useTranslations('testimonials');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: t('reviews.0.name'),
      image: '/avatar/avatar1.png',
      rating: 4,
      review: t('reviews.0.review'),
      date: t('reviews.0.date'),
    },
    {
      id: 2,
      name: t('reviews.1.name'),
      image: '/avatar/avatar2.png',
      rating: 3,
      review: t('reviews.1.review'),
      date: t('reviews.1.date'),
    },
    {
      id: 3,
      name: t('reviews.2.name'),
      image: '/avatar/avatar3.png',
      rating: 4,
      review: t('reviews.2.review'),
      date: t('reviews.2.date'),
    },
    {
      id: 4,
      name: t('reviews.3.name'),
      image: '/avatar/avatar1.png',
      rating: 5,
      review: t('reviews.3.review'),
      date: t('reviews.3.date'),
    },
  ];

  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    }),
  );

  return (
    <section className="my-10 w-full bg-[#FBEAEA] p-10 py-20 dark:bg-[#3F3F46]">
      <div className="container mx-auto px-4">
        <Carousel
          plugins={[plugin.current]}
          className="mx-auto w-full max-w-7xl"
          opts={{
            align: 'start',
            loop: true,
            direction: isRTL ? 'rtl' : 'ltr',
          }}
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
        >
          <CarouselContent className="-ml-1">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="px-2 py-4 md:basis-1/2 md:px-5 lg:basis-1/3"
              >
                <div className="p-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="h-10 w-10" />
          <CarouselNext className="h-10 w-10" />
        </Carousel>
      </div>
    </section>
  );
}
