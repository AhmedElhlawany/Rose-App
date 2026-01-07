import Image from 'next/image';
import React from 'react';
import { Button } from '../../ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const features = [
  'Competitive Prices & Easy Shopping',
  'Premium Quality & Elegant Packaging',
  'Perfect for Every Occasion',
  'Fast & Reliable Delivery',
];
const About = () => {
  return (
    <div className="container mx-auto p-20">
      <div className="grid w-full items-center gap-8 md:grid-cols-2">
        {/*Images */}
        <div className="flex gap-8">
          <div className="relative">
            {/* Red Shape */}
            <div className="absolute left-0 -z-10 h-[22.5rem] w-[16.875rem] rotate-3 rounded-[3.125rem_7.5rem_7.5rem_7.5rem] border-4 border-red-900"></div>

            {/* main Images */}
            <Image
              src="/951.svg"
              alt="unwrapping violet gift"
              width={302}
              height={336}
              className="relative left-5 top-5 h-[21rem] w-[18.875rem] overflow-hidden rounded-[3.125rem_7.5rem_7.5rem_7.5rem] object-cover"
            />
          </div>

          {/* Side Images */}
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/954.svg"
              alt="orange gift"
              width={192}
              height={192}
              className="h-48 w-48 rounded-[9.375rem] object-cover"
            />
            <Image
              src="/953.svg"
              alt="blue gift with balloons"
              width={192}
              height={144}
              className="h-36 w-48 rounded-[3.125rem_6.25rem_6.25rem_3.125rem] object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <h1 className="text-base font-bold">About</h1>
          <h2 className="mb-1 text-3xl font-bold">
            Delivering the <span>Finest</span> Gift Boxes for Your{' '}
            <span>Special</span> Moments
          </h2>
          <p>
            Make every moment memorable with our premium gift boxes. Carefully
            curated and beautifully packaged, each box is filled with handpicked
            items designed to impress. Whether it&apos;s for a birthday,
            wedding, or a simple “thank you,” our gift boxes are crafted to
            leave a lasting impression — because thoughtful gifting starts here.
          </p>
          <Link href="/products">
            <Button className="my-6 w-32 uppercase">
              discover <ArrowRight />
            </Button>
          </Link>
          <ul className="grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <li key={feature} className="flex gap-4">
                <Check />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
