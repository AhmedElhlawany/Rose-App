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

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  review: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jake Miller',
    image: '/avatar/avatar1.png',
    rating: 4,
    review:
      "I've been ordering from this flower shop for years and they never disappoint. The quality and service are exceptional!",
    date: 'January 12, 2025',
  },
  {
    id: 2,
    name: 'Tyler Brooks',
    image: '/avatar/avatar2.png',
    rating: 3,
    review:
      "Customer service is top-notch and the flowers last longer than any others I've bought. Highly recommend!",
    date: 'January 12, 2025',
  },
  {
    id: 3,
    name: 'Max Turner',
    image: '/avatar/avatar3.png',
    rating: 4,
    review:
      'The team truly cares about every order. I always feel confident when I buy flowers from here. The checkout process was sup...',
    date: 'January 12, 2025',
  },
  {
    id: 4,
    name: 'Lisa Anderson',
    image: '/avatar/avatar1.png',
    rating: 5,
    review:
      'Amazing quality and beautiful presentation! Every bouquet I receive is absolutely stunning. The delivery is always on time and the flowers stay fresh for so long!',
    date: 'January 10, 2025',
  },
];

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
    <div className="relative h-full">
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
      <div className="-mt-16 rounded-[2rem] bg-white px-5 pb-5 pt-20 shadow-md">
        <h3 className="mb-10 text-center text-base font-semibold text-[#27272A]">
          {testimonial.name}
        </h3>

        <div className="mb-6">
          <StarRating rating={testimonial.rating} />
        </div>

        <p className="mb-8 text-center text-base leading-[100%] text-[#27272A]">
          {testimonial.review}
        </p>

        <p className="text-center text-sm text-gray-400">{testimonial.date}</p>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    }),
  );

  return (
    <section className="my-10 w-full bg-[#FBEAEA] p-10">
      <div className="container mx-auto px-4">
        <Carousel
          plugins={[autoplay.current]}
          className="mx-auto w-full max-w-7xl"
          opts={{
            align: 'start',
            loop: true,
          }}
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.reset()}
        >
          <CarouselContent className="-ml-1">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-1 pt-16 md:basis-1/2 lg:basis-1/3"
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
