'use client';

import { companiesList } from '@/lib/constants/companies-list';
import Image from 'next/image';

/**
 * Companies section displaying trusted partner logos
 */
export default function Companies() {
  return (
    <section className="container mx-auto w-11/12 py-10">
      <div className="flex min-h-52 flex-col justify-center gap-6 rounded-3xl bg-maroon-50">
        {/* Trust indicator heading */}
        <p className="py-3 text-center text-4xl font-bold text-maroon-700">
          Trusted by over <span className="text-softPink-500">4.5k+</span>{' '}
          companies
        </p>

        {/* Company logos */}
        <div className="flex justify-center gap-16 pb-8">
          {companiesList.map((company, index) => (
            <div key={index} className="relative h-14 w-36">
              <Image
                src={company.src}
                alt={company.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}