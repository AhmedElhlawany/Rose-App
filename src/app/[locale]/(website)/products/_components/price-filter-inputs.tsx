import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function PriceFilterInputs() {
  // Translations
  const t = useTranslations('product-filter');

  return (
    <section className="flex w-full items-center justify-between gap-2 lg:w-[18.875rem]">
      <div className="w-full flex-1">
        {/* Label */}
        <Label className="font-inter text-sm font-medium">
          {t('price-from')}
        </Label>
        {/* Input */}
        <Input className="w-full" />
      </div>
      <div className="w-full flex-1">
        {/* Label */}
        <Label className="font-inter text-sm font-medium">
          {t('price-to')}
        </Label>
        {/* Input */}
        <Input className="w-full" />
      </div>
    </section>
  );
}
