'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import OccasionFilterList from './occasion-filter-list';

export default function OccasionFilter() {
  return (
    <section className="w-full border-y-2 border-green-600 lg:max-w-[17.3125rem]">
      {/* Title & Rest Button */}

      <div className="flex w-full items-center justify-between pt-3">
        {/* Title */}
        <h2 className="text-lg font-semibold capitalize text-zinc-800 dark:text-zinc-50">
          occasion
        </h2>

        {/* Rest Button */}
        <Button className="w-fit gap-1 bg-transparent px-0 capitalize text-red-600 hover:bg-transparent dark:text-red-500">
          <X className="text-red-600 dark:text-red-500" />
          reset
        </Button>
      </div>

      {/* Occasions */}

      <div className="mb-6">
        <OccasionFilterList />
      </div>
    </section>
  );
}
