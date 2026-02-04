'use client';

import React from 'react';
import { useTranslations } from 'use-intl';
import { useFilters } from '../_hooks/use-filter';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import PriceFilterInputs from './price-filter-inputs';

export default function PriceFilter() {
  // Translations
  const t = useTranslations('product-filter');

  // Hook
  const { filters, resetFilter } = useFilters({ price: '' });

  return (
    <section className="w-full border-b-2 border-zinc-100 lg:w-[18.875rem]">
      <div className="flex w-full items-center justify-between pt-3">
        {/* Title */}
        <h2 className="text-lg font-semibold capitalize text-zinc-800 dark:text-zinc-50">
          {t('price')}
        </h2>

        {/* Rest Button */}
        {filters.price && (
          <Button
            onClick={() => resetFilter('occasion')}
            className="w-fit gap-1 bg-transparent px-0 capitalize text-red-600 hover:bg-transparent dark:text-red-500"
          >
            <X className="text-red-600 dark:text-red-500" />
            reset
          </Button>
        )}
      </div>

      {/* Price Inputs */}

      <div className="mb-5">
        <PriceFilterInputs />
      </div>
    </section>
  );
}
