import React from 'react';
import OccasionFilter from './occasion-filter';
import ProductList from './product-list';
import { useLocale } from 'next-intl';
import { cn } from '@/lib/utility/tailwind-merge';

export default function ProductContent() {
    // Hook
    const locale = useLocale();
  return (
    <div className="mx-20 mt-20 flex-col items-start justify-center gap-6 lg:flex lg:flex-row lg:items-start lg:justify-center">
      {/* Occasion Filter */}
      <section className={cn('w-full border-zinc-100 lg:max-w-[18.9125rem]' , locale ==='ar' ? "border-l-2 " :"border-r-2")}>
        <OccasionFilter />
      </section>

      {/* Product List */}
      <section className="w-full bg-red-400 lg:max-w-[58.625rem]">
        <ProductList />
      </section>
    </div>
  );
}
