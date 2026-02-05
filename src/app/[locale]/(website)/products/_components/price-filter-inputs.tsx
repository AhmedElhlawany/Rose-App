import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { useFilters } from '../_hooks/use-filter';
import { useDebounce } from 'use-debounce';

export default function PriceFilterInputs() {
  // Translations
  const t = useTranslations('product-filter');

  // Hook
  const { filters, setFilter } = useFilters({
    'price[gte]': '',
    'price[lte]': '',
  });

  // State
  const [from, setFrom] = useState(filters['price[gte]'] ?? '');
  const [to, setTo] = useState(filters['price[lte]'] ?? '');

  const [debouncedFrom] = useDebounce(from, 2000);
  const [debouncedTo] = useDebounce(to, 2000);

  // Effect
  useEffect(() => {
    setFilter('price[gte]', debouncedFrom || null);
  }, [debouncedFrom, setFilter]);

  useEffect(() => {
    setFilter('price[lte]', debouncedTo || null);
  }, [debouncedTo, setFilter]);

  return (
    <section className="flex w-full items-center justify-between gap-2 lg:w-[18.875rem]">
      <div className="w-full flex-1">
        {/* Label */}
        <Label className="font-inter text-sm font-medium">
          {t('price-from')}
        </Label>
        {/* Input */}
        <Input
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          type="number"
          className="w-full"
        />
      </div>
      <div className="w-full flex-1">
        {/* Label */}
        <Label className="font-inter text-sm font-medium">
          {t('price-to')}
        </Label>
        {/* Input */}
        <Input
          type="number"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full"
        />
      </div>
    </section>
  );
}
