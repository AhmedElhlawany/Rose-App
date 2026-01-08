'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '../../../components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { aboutServices } from '@/lib/constants/about-services';

const About = () => {
  return (
    <section className="container mx-auto w-11/12 py-10">
      <div className="grid w-full items-center gap-8 md:grid-cols-2">
        {/*Images */}
        <div className="flex gap-8">
          <div className="relative before:pointer-events-none before:absolute before:left-0 before:-z-10 before:h-[22.5rem] before:w-[16.875rem] before:rotate-3 before:rounded-[3.125rem_7.5rem_7.5rem_7.5rem] before:border-4 before:border-maroon-600 before:content-['']">
            {/* main Images */}
            <Image
              src="/violet-gift.svg"
              alt="unwrapping violet gift"
              width={302}
              height={336}
              className="relative left-5 top-5 h-[21rem] w-[18.875rem] overflow-hidden rounded-[3.125rem_7.5rem_7.5rem_7.5rem] object-cover"
            />
          </div>

          {/* Side Images */}
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/orange-gift.svg"
              alt="orange gift"
              width={192}
              height={192}
              className="h-48 w-48 rounded-[9.375rem] object-cover"
            />
            <Image
              src="/blue-gift.svg"
              alt="blue gift with balloons"
              width={192}
              height={144}
              className="h-36 w-48 rounded-[3.125rem_6.25rem_6.25rem_3.125rem] object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <h2 className="mb-6 font-bold text-softPink-500">About</h2>
          <h3 className="mb-1 text-3xl font-bold text-maroon-700">
            Delivering the <span className="text-softPink-500">Finest</span>{' '}
            Gift Boxes for Your{' '}
            <span className="text-softPink-500">Special</span> Moments
          </h3>
          <p>
            Make every moment memorable with our premium gift boxes. Carefully
            curated and beautifully packaged, each box is filled with handpicked
            items designed to impress. Whether it&apos;s for a birthday,
            wedding, or a simple “thank you,” our gift boxes are crafted to
            leave a lasting impression — because thoughtful gifting starts here.
          </p>
          <Button
            asChild
            className="my-6 w-32 rounded-xl bg-maroon-600 uppercase hover:bg-maroon-700"
          >
            <Link href="/products">
              discover <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <ul aria-label="Service features" className="grid grid-cols-2 gap-4">
            {aboutServices.map((service) => (
              <li key={service} className="flex gap-4">
                <Check aria-hidden="true" className="text-maroon-700" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
