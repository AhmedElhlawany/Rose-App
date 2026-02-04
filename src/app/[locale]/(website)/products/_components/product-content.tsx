import React from 'react';
import OccasionFilter from './occasion-filter';
import ProductList from './product-list';

export default function ProductContent() {
  return (
    <div className="mx-20 mt-20 flex-col items-start justify-center gap-6 lg:flex lg:flex-row lg:items-start lg:justify-center">
      {/* Occasion Filter */}
      <section className="w-full border-r-4 border-green-800 lg:max-w-[18.9125rem]">
        <OccasionFilter />
      </section>

      {/* Product List */}
      <section className="w-full bg-red-400 lg:max-w-[58.625rem]">
        <ProductList />
      </section>
    </div>
  );
}
